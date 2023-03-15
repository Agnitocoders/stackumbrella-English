import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { App } from 'src/AppConstant';
// import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss'],
})
export class WebComponent {
  url = ''
  constructor(
    public dataService: DataService,
  ) {
    // this.url = this.dataService.BaseUrl + '/web-stories';
    // App.BaseUrl + App.WebStory
  }
}
