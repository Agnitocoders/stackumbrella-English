import { Injectable } from '@angular/core';
import { Admob, AdmobOptions } from '@awesome-cordova-plugins/admob';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AdMobService {

  admobOptions: any = {}

  constructor(
    private platform: Platform
  ) {

    this.platform.ready().then(() => {

      // Admob options config
    const admobOptions: AdmobOptions ={
      publisherId:'ca-app-pub-8225551040577946~1009668997',
      bannerAdId: 'ca-app-pub-8225551040577946/6231325640',
      interstitialAdId: 'ca-app-pub-8225551040577946/9638968052',
      rewardedAdId: 'ca-app-pub-9171599815613800/1561820459',
      isTesting: false,
      autoShowBanner: false,
      autoShowInterstitial: false,
      autoShowRewarded: false,
      adSize: Admob.AD_SIZE.BANNER
    };

      Admob.setOptions(admobOptions)
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


  addInitalAdd() {
    Admob.requestInterstitialAd()
      .then(() => console.log('Interstitial ad loaded'))
      .catch(err => console.error('Error loading interstitial ad:', err));


    // Show an interstitial ad (requestInterstitialAd must be called before)
    Admob.onAdLoaded().subscribe((ad) => {
      if (ad.adType === Admob.AD_TYPE.INTERSTITIAL) {
        Admob.showInterstitialAd()
          .then(() => console.log('Interstitial ad shown'))
          .catch(err => console.error('Error showing interstitial ad:', err));
      }
    });
  }

}
