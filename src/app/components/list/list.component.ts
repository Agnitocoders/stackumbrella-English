import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { App } from 'src/AppConstant';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  @ViewChild(IonInfiniteScroll)
  infiniteScroll!: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll)
  virtualScroll!: IonVirtualScroll;


  constructor(
    public dataService: DataService,
    private http: HttpClient,
    private socialSharing: SocialSharing,
    private router: Router
  ) { }

  async ngOnInit() {
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.dataService.getAllPost();
      this.dataService.getAllNavCategory();
      this.dataService.notificationCount = 0;
      console.log(this.dataService.BaseUrl)
      event.target.complete();
    }, 2000);
  };


  loadData(event: any) {
    setTimeout(() => {
      this.dataService.getNextPost()
      event.target.complete();
      if (this.dataService.postData.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  gotoDetailsPage(val: any) {
    console.log(val['categories']);
    this.dataService.getRelatedArticle(val['categories'][0])
    this.dataService.selectedPost = val;
    this.router.navigate(['tabs/tab1/post-details']);
  }

  selectPost(val: any) {
    this.dataService.selectedPost = [];
  }

  removeTag(string: string) {
    string = string.replace(/(<([^>]+)>)/ig, ' ');
    var html = string
    var div = document.createElement("div");
    div.innerHTML = html;
    var text = div.textContent || div.innerText || " ";
    return text;
  }

  share(event: Event, uri: string) {
    event.stopPropagation();
    console.log(uri)
    this.socialSharing.share(uri);
  }

}
