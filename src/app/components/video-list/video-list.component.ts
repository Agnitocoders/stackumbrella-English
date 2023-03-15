import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { App } from 'src/AppConstant';
import { InViewportMetadata } from 'ng-in-viewport';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {
  mute: boolean = true;
  showAmimation: boolean = false;
  volumeAnimation: boolean = false
  obj1 = { threshold: [0, 0.65], partial: true };
  @ViewChild(IonInfiniteScroll)
  infiniteScroll!: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll)
  virtualScroll!: IonVirtualScroll;

  @ViewChildren('player')
  videoPlayer!: QueryList<any>;
  constructor(
    public dataService: DataService,
    private http: HttpClient,
    private socialSharing: SocialSharing,
    private router: Router
  ) { }

  async ngOnInit() {
  }

  didScroll(event:any){
    console.log(event)
  }
  onIntersection(event: any) {
    // console.log(event)
    const { [InViewportMetadata]: { entry }, target } = event;
    const ratio = entry.intersectionRatio;
    const vid = target;
    // console.log(vid)
    ratio >= 0.65 ? this.loadandPlay(vid) : vid.pause();
  }

  loadandPlay(vid:any){
    vid.load();
    vid.play()
  }

  unloadand(vid:any){
    vid.unload()
  }

  public changeVideoAudio(event: any, id: string) {
    // console.log('working  mute' ,id);
    let vid: any = document.getElementById('media-' + id);
    vid.muted = !vid.muted;
    this.mute = vid.muted
    this.volumeAnimation = true
    setTimeout(() => {
      this.volumeAnimation = false
    }, 1200);
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.dataService.getAllVideos();
      console.log(this.dataService.BaseUrl)
      event.target.complete();
    }, 2000);
  };


  loadData(event: any) {
    setTimeout(() => {
      this.dataService.getMoreVideos()
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

  doLike(event:any){
    event.stopPropagation();
    // const icon = document.querySelector('.like');
    // if (icon) {
      // icon.classList.add('likeEffect');
      this.showAmimation = true;
      setTimeout(() => {
        // icon.classList.remove('likeEffect');
        this.showAmimation = false
      }, 1200);
    // }
  }



}
