import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { App } from 'src/AppConstant';
import { DataService } from '../services/data.service';
// import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  // url = 'https://stackumbrella.com/web-stories';
  url: any;
  render: boolean = false;
  constructor(
    public dataService: DataService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.loadWebStoryUrl()
    setTimeout(() => {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url)
      console.log('url updated')
    }, 1000);
    this.render == true;
  }

  loadWebStoryUrl() {
    this.dataService.language == 'english' ? this.url = App.BaseUrl + App.WebStory : this.url = App.BaseUrl2 + App.WebStory;
    return this.url
  }

  reloadPage(event: any) {
    console.log('page hitted')
    setTimeout(() => {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.loadWebStoryUrl())
      console.log('url updated')
    }, 1000);
  }


}
