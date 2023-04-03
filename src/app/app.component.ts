import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Platform } from '@ionic/angular';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic';
// import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  pushes: any = [];
  constructor(
    public dataService: DataService,
    public router: Router,
    // private FCM: FCM,
    public plt: Platform) {
    this.plt.ready()
      .then(() => {
        this.getToken();
        FCM.getInitialPushPayload().then(data => {
          if (data?.wasTapped) {
            console.log('notification from new code background', data);
            this.dataService.notificationCount = this.dataService.notificationCount + 1;
            if (data['type'] != this.dataService.language) {
              this.dataService.LangAlertNotification();
            }
            let res = this.dataService.getPostById(data['id']);
            if (res) {
              this.dataService.addNotifyLocal(data);
              setTimeout(() => {
                this.router.navigate(['tabs/tab1/post-details']);
              }, 600);
            }
          } else {
            console.log('notification from new code foreground', data);
            this.dataService.addNotifyLocal(data);
          }
        })
        FCM.onNotification().subscribe(data => {
          if (data.wasTapped) {
            console.log("Received in background", data);
            let res = this.dataService.getPostById(data['id']);
            setTimeout(() => {
              if (res) {
                this.router.navigate([data['action']]);
                this.dataService.addNotifyLocal(data);
              }
              else {
                this.router.navigate([data['action']]);
                this.dataService.addNotifyLocal(data);
              }
            }, 100);
          } else {
            console.log("Received in foreground", data);
            this.dataService.addNotifyLocal(data);
            this.dataService.notificationCount = this.dataService.notificationCount + 1;       
          };
        });

        FCM.onTokenRefresh().subscribe(token => {
          this.dataService.updateDevicetoken(token)
          console.log(token);
        });
      })
  }
  subscribeToTopic() {
    FCM.subscribeToTopic('enappd');
    console.log('enappd');
  }
  getToken() {
    FCM.getToken().then(token => {
      this.dataService.updateDevicetoken(token)
      console.log(token);
    });
  }
  unsubscribeFromTopic() {
    FCM.unsubscribeFromTopic('enappd');
  }

}