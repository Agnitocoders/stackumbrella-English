"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2535],{2535:(b,u,s)=>{s.d(u,{x:()=>f});var d,n=s(7598),c=(d=function(e,o){return(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(r[i]=a[i])})(e,o)},function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=e}d(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}),p=function(d){function e(){return null!==d&&d.apply(this,arguments)||this}return c(e,d),e.prototype.setOptions=function(o){return(0,n.DM)(this,"setOptions",{},arguments)},e.prototype.createBannerView=function(o){return(0,n.DM)(this,"createBannerView",{},arguments)},e.prototype.showBannerAd=function(o){return(0,n.DM)(this,"showBannerAd",{},arguments)},e.prototype.destroyBannerView=function(){return(0,n.DM)(this,"destroyBannerView",{},arguments)},e.prototype.requestInterstitialAd=function(o){return(0,n.DM)(this,"requestInterstitialAd",{},arguments)},e.prototype.showInterstitialAd=function(){return(0,n.DM)(this,"showInterstitialAd",{},arguments)},e.prototype.requestRewardedAd=function(o){return(0,n.DM)(this,"requestRewardedAd",{},arguments)},e.prototype.showRewardedAd=function(){return(0,n.DM)(this,"showRewardedAd",{},arguments)},e.prototype.onAdLoaded=function(){return(0,n.DM)(this,"onAdLoaded",{eventObservable:!0,event:"appfeel.cordova.admob.onAdLoaded",element:"document"},arguments)},e.prototype.onAdFailedToLoad=function(){return(0,n.DM)(this,"onAdFailedToLoad",{eventObservable:!0,event:"appfeel.cordova.admob.onAdFailedToLoad",element:"document"},arguments)},e.prototype.onAdOpened=function(){return(0,n.DM)(this,"onAdOpened",{eventObservable:!0,event:"appfeel.cordova.admob.onAdOpened",element:"document"},arguments)},e.prototype.onAdClosed=function(){return(0,n.DM)(this,"onAdClosed",{eventObservable:!0,event:"appfeel.cordova.admob.onAdClosed",element:"document"},arguments)},e.prototype.onAdLeftApplication=function(){return(0,n.DM)(this,"onAdLeftApplication",{eventObservable:!0,event:"appfeel.cordova.admob.onAdLeftApplication",element:"document"},arguments)},e.prototype.onRewardedAd=function(){return(0,n.DM)(this,"onRewardedAd",{eventObservable:!0,event:"appfeel.cordova.admob.onRewardedAd",element:"document"},arguments)},e.prototype.onRewardedAdVideoStarted=function(){return(0,n.DM)(this,"onRewardedAdVideoStarted",{eventObservable:!0,event:"appfeel.cordova.admob.onRewardedAdVideoStarted",element:"document"},arguments)},e.prototype.onRewardedAdVideoCompleted=function(){return(0,n.DM)(this,"onRewardedAdVideoCompleted",{eventObservable:!0,event:"appfeel.cordova.admob.onRewardedAdVideoCompleted",element:"document"},arguments)},Object.defineProperty(e.prototype,"AD_SIZE",{get:function(){return(0,n.J2)(this,"AD_SIZE")},set:function(o){(0,n.Iq)(this,"AD_SIZE",o)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"AD_TYPE",{get:function(){return(0,n.J2)(this,"AD_TYPE")},set:function(o){(0,n.Iq)(this,"AD_TYPE",o)},enumerable:!1,configurable:!0}),e.pluginName="AdMob",e.plugin="cordova-admob",e.pluginRef="admob",e.repo="https://github.com/appfeel/admob-google-cordova",e.platforms=["Android","iOS","Browser"],e}(n.On),t=new p,l=s(8256),A=s(8058);let f=(()=>{class d{constructor(o){this.platform=o,this.admobOptions={},this.platform.ready().then(()=>{t.setOptions({publisherId:"ca-app-pub-8225551040577946~1009668997",bannerAdId:"ca-app-pub-8225551040577946/6231325640",interstitialAdId:"ca-app-pub-8225551040577946/9638968052",rewardedAdId:"ca-app-pub-9171599815613800/1561820459",isTesting:!1,autoShowBanner:!1,autoShowInterstitial:!1,autoShowRewarded:!1,adSize:t.AD_SIZE.BANNER}).then(()=>console.log("Admob options have been successfully set")).catch(a=>console.error("Error setting admob options:",a))}),t.createBannerView().then(()=>console.log("Banner ad loaded")).catch(r=>console.error("Error loading banner ad:",r)),t.onAdLoaded().subscribe(r=>{r.adType===t.AD_TYPE.BANNER&&t.showBannerAd().then(()=>console.log("Banner ad shown")).catch(a=>console.error("Error showing banner ad:",a))}),t.onAdLoaded().subscribe(r=>{r.adType===t.AD_TYPE.BANNER?(console.log("Banner ad is loaded"),t.showBannerAd()):r.adType===t.AD_TYPE.INTERSTITIAL?(console.log("Interstitial ad is loaded"),t.showInterstitialAd()):r.adType===t.AD_TYPE.REWARDED&&(console.log("Rewarded ad is loaded"),t.showRewardedAd())}),t.onAdFailedToLoad().subscribe(r=>console.log("Error loading ad:",r)),t.onAdOpened().subscribe(()=>console.log("Interstitial ad opened")),t.onAdClosed().subscribe(()=>console.log("Interstitial ad closed")),t.onAdLeftApplication().subscribe(()=>console.log("Ad lefted application")),t.onRewardedAd().subscribe(()=>console.log("The user has been rewarded")),t.onRewardedAdVideoStarted().subscribe(()=>console.log("Rewarded ad vieo started")),t.onRewardedAdVideoCompleted().subscribe(()=>console.log("Rewarded ad video completed"))}addInitalAdd(){t.requestInterstitialAd().then(()=>console.log("Interstitial ad loaded")).catch(o=>console.error("Error loading interstitial ad:",o)),t.onAdLoaded().subscribe(o=>{o.adType===t.AD_TYPE.INTERSTITIAL&&t.showInterstitialAd().then(()=>console.log("Interstitial ad shown")).catch(r=>console.error("Error showing interstitial ad:",r))})}}return d.\u0275fac=function(o){return new(o||d)(l.LFG(A.t4))},d.\u0275prov=l.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);