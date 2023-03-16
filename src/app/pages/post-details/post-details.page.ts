import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { IonContent, Platform } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Router } from '@angular/router';
import { Admob, AdmobOptions } from '@awesome-cordova-plugins/admob';
declare var window: any;
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

  admobOptions: AdmobOptions = {
    bannerAdId: 'ca-app-pub-4957358923271966/8781967401',
    interstitialAdId: 'ca-app-pub-4957358923271966/4312788095',
    rewardedAdId: 'ca-app-pub-4957358923271966/4086722074',
    isTesting: true,
    autoShowBanner: false,
    autoShowInterstitial: false,
    autoShowRewarded: false,
    adSize: Admob.AD_SIZE.BANNER
  };

  constructor(
    public dataService: DataService,
    public menuCtr: MenuController,
    public domSanitizer: DomSanitizer,
    private socialSharing: SocialSharing,
    public router: Router,
    // private admob: Admob,
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
      Admob.setOptions(this.admobOptions)
        .then(() => console.log('Admob options have been successfully set'))
        .catch((err: any) => console.error('Error setting admob options:', err));
    })

    // (Optionally) Load banner ad, in order to have it ready to show
    Admob.createBannerView()
      .then(() => console.log('Banner ad loaded'))
      .catch(err => console.error('Error loading banner ad:', err));


    // Show banner ad (createBannerView must be called before and onAdLoaded() event raised)
    Admob.onAdLoaded().subscribe((ad) => {
      if (ad.adType === Admob.AD_TYPE.BANNER) {
        Admob.showBannerAd()
          .then(() => console.log('Banner ad shown'))
          .catch(err => console.error('Error showing banner ad:', err));
      }
    });


    // On Ad loaded event
    Admob.onAdLoaded().subscribe((ad) => {
      if (ad.adType === Admob.AD_TYPE.BANNER) {
        console.log('Banner ad is loaded');
        Admob.showBannerAd();
      } else if (ad.adType === Admob.AD_TYPE.INTERSTITIAL) {
        console.log('Interstitial ad is loaded');
        Admob.showInterstitialAd();
      } else if (ad.adType === Admob.AD_TYPE.REWARDED) {
        console.log('Rewarded ad is loaded');
        Admob.showRewardedAd();
      }
    });


    // On ad failed to load
    Admob.onAdFailedToLoad().subscribe(err => console.log('Error loading ad:', err));



    // On interstitial ad opened
    Admob.onAdOpened().subscribe(() => console.log('Interstitial ad opened'));



    // On interstitial ad closed
    Admob.onAdClosed().subscribe(() => console.log('Interstitial ad closed'));



    // On ad clicked and left application
    Admob.onAdLeftApplication().subscribe(() => console.log('Ad lefted application'));



    // On user ad rewarded
    Admob.onRewardedAd().subscribe(() => console.log('The user has been rewarded'));



    // On rewarded ad video started
    Admob.onRewardedAdVideoStarted().subscribe(() => console.log('Rewarded ad vieo started'));



    // On rewarded ad video completed
    Admob.onRewardedAdVideoCompleted().subscribe(() => console.log('Rewarded ad video completed'));
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
      window.imgurEmbed.createIframe();
      // iframely.load();
      this.dataService.selectedPost.content.rendered = this.domSanitizer.bypassSecurityTrustHtml(this.dataService.selectedPost.content.rendered)
    }, 500);
    // console.log(this.dataService.selectedPost);
    if (!this.dataService.selectedPost) {
      this.router.navigate(['/tab1'])
    }


    setTimeout(() => {
      this.viewNow = true;
      window.imgurEmbed.createIframe();
      // this.dataService.selectedPost.content.rendered = this.domSanitizer.bypassSecurityTrustHtml(this.dataService.selectedPost.content.rendered)
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
