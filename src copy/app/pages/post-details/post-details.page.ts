import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Router } from '@angular/router';
// import { ifram}

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
  ) {

  }

  ngOnInit() {
    this.menuCtr.close();
    // window.instgrm.Embeds.process()
  }

  ionViewWillEnter() {
    console.log('run by child')
    this.scrollToTop();
    this.loading = true
    setTimeout(() => {
      this.loading = false
      // window.imgurEmbed.createIframe();
      // iframely.load();
      this.dataService.selectedPost.content.rendered = this.domSanitizer.bypassSecurityTrustHtml(this.dataService.selectedPost.content.rendered)
    }, 500);
    // console.log(this.dataService.selectedPost);
    if (!this.dataService.selectedPost) {
      this.router.navigate(['/tab1'])
    }


    setTimeout(() => {
      this.viewNow = true;
      this.dataService.selectedPost.content.rendered = this.domSanitizer.bypassSecurityTrustHtml(this.dataService.selectedPost.content.rendered)
    }, 500);

    // const twitter = document.getElementsByTagName('blockquote')[1];
    // console.log(twitter);
    // let newFrame = document.createElement('iframe');
    // // newFrame.innerHTML = twitter.innerHTML
    // console.log(newFrame);
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
    // const data = {
    //   action      :       "tabs/tab1/post-details",
    //   body      :       "testing",
    //   id      :      crypto.randomUUID(),
    //   image      :       "https://stackumbrella.com/wp-content/uploads/2023/02/ezgif.com-gif-maker-10-300x176.gif",
    //   title:  "send by postman opera",
    //   type     :      "hindi",
    //   wasTapped      :       false,}
    // this.dataService.addNotifyLocal(data)

  }

}
