import { Component, OnInit } from '@angular/core';
// import { InAppBrowser, InAppBrowserObject } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Platform } from '@ionic/angular';
// import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { App } from 'src/AppConstant';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private iab: InAppBrowser, private platform: Platform) {
    // var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
    this.init();
  }

  ngOnInit() {
    // const browser = this.iab.create('https://ionicframework.com/');
    // // browser.executeScript(...);
    // // browser.insertCSS(...);
    // browser.on('loadstop').subscribe(event => {
    //   browser.insertCSS({ code: "body{color: red;" });
    // });

    // browser.close();
  }

  init() {
    this.platform.ready().then(() => {

      var options = "location=yes,hideurlbar=yes,hidenavigationbuttons=yes,toolbarcolor=#ffffff,toolbar=no,closebuttoncaption='',";
      const browser = this.iab.create(App.BaseUrl2, '_blank', options);
      browser.on('loadstop').subscribe(event => {
        browser.insertCSS({ code: "body{color: red;" });
      });
    });
  }

}
