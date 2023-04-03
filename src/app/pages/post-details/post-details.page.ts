import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { IonContent, Platform } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { Router } from '@angular/router';
import { AdMobService } from '../../services/adMob/ad-mob.service';
// import { Admob, AdmobOptions } from '@awesome-cordova-plugins/admob';
declare var twttr: any;
declare var instgrm: any;
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class PostDetailsPage implements OnInit {
  canGoBack = 'canGoBack';
  selectedPost: any = [];
  postDetails: string = '';
  loading: boolean = false;
  viewNow: boolean = false
  @ViewChild(IonContent)
  content!: IonContent;

  

  constructor(
    public dataService: DataService,
    public menuCtr: MenuController,
    public domSanitizer: DomSanitizer,
    private socialSharing: SocialSharing,
    public router: Router,
    // private admob: Admob,
    private platform: Platform,
    private adService: AdMobService
  ) {
  }

  ngOnInit() {
    this.menuCtr.close();
    this.adService.addInitalAdd();
  }

  ionViewWillEnter() {
    console.log('run by child')
    this.scrollToTop();
    this.loading = true;
    instgrm.Embeds.process();
    this.dataService.selectedPost.content.rendered = this.domSanitizer.bypassSecurityTrustHtml(this.dataService.selectedPost.content.rendered)
    setTimeout(() => {
      this.loading = false;
      instgrm.Embeds.process();
      twttr.widgets.load();
    }, 500);
    // console.log(this.dataService.selectedPost);
    if (!this.dataService.selectedPost) {
      this.router.navigate(['/tab1'])
    }

    setTimeout(() => {
      this.viewNow = true;
    }, 500);
  }

  scrollToTop() {
    this.content.scrollToTop(400);
  }

  removeTag(string: string) {
    string = string.replace(/(<([^>]+)>)/ig, ' ');
    var html = string
    var div = document.createElement("div");
    div.innerHTML = html;
    var text = div.textContent || div.innerText || " ";
    return text;
  }

  ionViewWillLeave() {
    this.menuCtr.close()
  }

  share(uri: string) {
    console.log(uri)
    this.socialSharing.share(uri);
  }

}
