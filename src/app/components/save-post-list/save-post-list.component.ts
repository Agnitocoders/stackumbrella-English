import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
@Component({
  selector: 'app-save-post-list',
  templateUrl: './save-post-list.component.html',
  styleUrls: ['./save-post-list.component.scss'],
})
export class SavePostListComponent implements OnInit {

  
  @ViewChild(IonInfiniteScroll)
  infiniteScroll!: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll)
  virtualScroll!: IonVirtualScroll;
  zeroSave = false;

  constructor(
    public dataService: DataService,
    private socialSharing: SocialSharing,
    private router: Router
  ) { }

  async ngOnInit() {
    console.log('view is running')
    setTimeout(() => {
      this.dataService.savePostLocal(null, null)
      if(this.dataService.savedPost.length==0){
        this.zeroSave = true;
      }
    }, 1000);
    
  }

  ionViewWillEnter(){
    
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.dataService.savePostLocal(null, null)
      event.target.complete();
    }, 2000);
  };


 

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  gotoDetailsPage(val: any) {
    console.log(val['categories']);
    this.dataService.getRelatedArticle(val['categories'][0])
    this.dataService.selectedPost = val;
    this.router.navigate(['tabs/tab1/post-details']);
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