import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  constructor(
    public dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async gotoDetailsPage(val: any) {
    console.log(val);
    if(this.dataService.language!= 'english'){
      let isChanged = await this.dataService.LangAlertNotification();
      if(isChanged == true){
        this.dataService.getPostById(val.data.id);
        this.router.navigate(['tabs/tab1/post-details']);
        this.dataService.removeNotification(val.data.id);
      }
    }else{
      this.dataService.getPostById(val.data.id);
      this.router.navigate(['tabs/tab1/post-details']);
      this.dataService.removeNotification(val.data.id);
    }
  }

  goBack(){
    this.router.navigate(['tabs'])
  }

  clearNotification(){
    this.dataService.notification = []
    localStorage.setItem('notifications','');
    console.log(localStorage.getItem('notifications'))
  }
}
