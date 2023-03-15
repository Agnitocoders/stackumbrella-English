import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relative-post',
  templateUrl: './relative-post.component.html',
  styleUrls: ['./relative-post.component.scss'],
})
export class RelativePostComponent implements OnInit {
  @Output('parentFun') parentFun: EventEmitter<any> = new EventEmitter();

  constructor(
    public dataService: DataService,
    private http: HttpClient,
    private socialSharing: SocialSharing,
    private router: Router
  ) { }

  ngOnInit() {}

  handleRefresh(event: any) {
    setTimeout(() => {
      this.dataService.getAllPost();
      this.dataService.getAllNavCategory();
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

 

  gotoDetailsPage(val: any) {
    console.log(val)
    this.dataService.selectedPost = val;
    this.parentFun.emit();
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
