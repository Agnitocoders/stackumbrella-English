import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController, MenuController, Platform, ToastController } from '@ionic/angular';
import { App } from 'src/AppConstant';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  theme = 'light'
  selectedPostId = '00';
  selectedPost: any = [];
  allPost = [];
  featurePost: any[] = [];
  relatedArticles: any = [];
  selectedCategory = '';
  BaseUrl = '';
  language: string = '';
  isLoading: boolean = false;
  topNav: any[] = [];
  restart: boolean = false;
  postData: any = [] = [];
  page = 1;
  notification: any = [];
  videos: any[] = [];
  savedPost: any[] = [];
  notificationCount = 0;
  notifyToastIsView: boolean = false
  constructor(
    public http: HttpClient,
    public alertController: AlertController,
    public menuCtr: MenuController,
    private platform: Platform,
    public domSanitizer: DomSanitizer,
    private toastController: ToastController
    // private app: appini
  ) {
    this.setLanguage();
    this.getAllNavCategory();
    this.getAllPost();
    this.addNotifyLocal(null);
    this.getAllVideos();
    this.savePostLocal(null, null);
    this.checkAppUpdate();

  }

  updateDevicetoken(token: string) {

    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    };
    try {
      this.http.get(App.BaseUrl + App.TokenUploadApi + token + "", { headers })
        .subscribe((res: any) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  }

  ionSlideTouchEnd() {
  }

  getAllVideos() {
    this.isLoading = true;
    this.http.get(App.BaseUrl3 + '/reels').subscribe((vid: any) => {
      this.isLoading = false;
      this.videos = vid.data;
      // console.log('vid list >>>>>>>>>', this.videos);
    }, error => {
      this.isLoading = false;
      console.log(error)
    })
  }

  getMoreVideos() {
    this.isLoading = true;
    this.http.get(App.BaseUrl3 + '/reels').subscribe((vid: any) => {
      this.isLoading = false;
      this.videos = vid.data
      // for(let i= 0; i<vid.data.lenght;i++){
      //   this.videos.push(vid.data[i]);
      //   console.log('vid list >>>>>>>>>',vid.data[i]);
      // }
      console.log('vid list >>>>>>>>>', this.videos);
    }, error => {
      this.isLoading = false;
      console.log(error)
    })
  }

  async getAllNavCategory() {
    this.appReload();
    this.topNav = []
    try {
      this.isLoading = true
      this.http.get(this.BaseUrl + App.PostFix + App.NavCategoryPerPage)
        .subscribe((res: any) => {
          let rest = res
          // console.log('Category res >>>>>>>', rest);
          for (let i = 0; i < rest.length; i++) {
            if (rest[i].count > 0) {
              this.topNav.push(rest[i]);
              // console.log(this.topNav[i].name)
            }
          }
          this.topNav = this.topNav.sort(function (countFirst, countLast) { return countLast.count - countFirst.count })
          this.isLoading = false;
          // console.log('Category res >>>>>>>', this.topNav);
        });
    } catch (error) {
      console.log(error);
      alert('error');
      this.isLoading = false
    }
  }

  async getAllPost() {
    this.page = 1
    try {
      this.isLoading = true
      this.http.get(this.BaseUrl + App.PostFix + App.PostPage + this.page + App.Embd)
        .subscribe((res: any) => {
          this.postData = [] = []
          const featurepost = []
          for (let i = 0; i < res.length; i++) {
            if (res[i].content.rendered) {
              if (i < 4) {
                featurepost.push(res[i])
              } else {
                res[i].saved = false;
                this.postData.push(res[i]);
                this.autoMarkAsSavePost()
              }
            }
            this.featurePost = featurepost;
          }
          if (this.selectedPostId != '00') {
            this.filterPost(this.selectedPostId);
          }
          this.isLoading = false;
          console.log(this.postData)
          return this.postData
        });
    } catch (error) {
      console.log(error);
      alert('error');
      this.isLoading = false;
      // return null
    }
  }

  async getNextPost() {
    this.page = this.page + 1;
    console.log(this.page);
    var updatedData: any[] = []
    try {
      this.isLoading = true
      this.http.get(this.BaseUrl + App.PostFix + App.PostPage + this.page + App.Embd)
        .subscribe((resp: any) => {
          updatedData = resp;
          resp.forEach((element: any) => {
            element.saved = false;
            this.postData.push(element);
          });
        });
      this.isLoading = false
      this.autoMarkAsSavePost();
      console.log(this.postData)
    } catch (error) {
      console.log(error);
      alert('error');
      this.isLoading = false
    }
  }

  setLanguage() {
    let lang = localStorage.getItem('language');
    console.log(lang)
    if (lang == '' || lang == 'english' || !lang) {
      this.language = 'english';
      localStorage.setItem('language', this.language);
      this.BaseUrl = App.BaseUrl;
      return
    } if (lang == 'hindi') {
      this.language = 'hindi';
      localStorage.setItem('language', this.language);
      this.BaseUrl = App.BaseUrl2;
    }
    console.log('this is lang is hare >>>>>> ', lang);
  }

  async getRelatedArticle(catId: any) {
    let id = catId.toString();
    try {
      this.isLoading = true
      this.http.get(this.BaseUrl + App.PostFix + App.Posts + App.PostCategoryId + id + App.Embd + App.PerPage + 20)
        .subscribe((res: any,) => {
          console.log(res)
          this.relatedArticles = [] = []
          const articles = []
          for (let i = 1; i < res.length; i++) {
            if (res[i].content.rendered) {
              articles.push(res[i])
            }
            this.relatedArticles = articles;
          }
          this.isLoading = false;
          console.log(this.relatedArticles)
          return this.relatedArticles
        }, (error) => {
          this.isLoading = false;
          console.log(error)
        });
    } catch (error) {
      console.log(error);
      alert('error');
      this.isLoading = false;
      // return null
    }
  }

  async LangAlert() {
    let lang = '';
    const header = 'Change language?';
    let subHeader = '';
    if (this.language == 'hindi') {
      subHeader = 'English Language';
      lang = 'english'
    } if (this.language == 'english') {
      subHeader = 'हिन्दी भाषा'
      lang = 'hindi'
    }
    console.log(lang)

    const alert = await this.alertController.create({
      mode: "ios",
      header: header,
      subHeader: subHeader,
      backdropDismiss: true,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // this.menuCtr.close()
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log(lang)
            localStorage.setItem('language', lang);
            this.language = lang;
            if (this.language == 'hindi') {
              this.BaseUrl = App.BaseUrl2;
              console.log(this.BaseUrl);
              this.getAllNavCategory();
              this.getAllPost()
            }
            if (this.language == 'english') {

              this.BaseUrl = App.BaseUrl;
              console.log(this.BaseUrl)
              this.getAllNavCategory();
              this.getAllPost()
            }
            // this.menuCtr.close()
          },
        },
      ],

    });

    await alert.present();
  }

  getPostById(id: string) {
    try {
      this.isLoading = true
      this.http.get(this.BaseUrl + App.PostFix + App.Posts + id + '?_embed')
        .subscribe(async (res: any) => {
          this.selectedPost = await res;
          this.selectedPost.content.rendered = this.domSanitizer.bypassSecurityTrustHtml(this.selectedPost.content.rendered);
          console.log('selected post res >>>>>>>', this.selectedPost);
          this.isLoading = false;
        });
      return this.selectedPost
    } catch (error) {
      console.log(error);
      this.isLoading = false
      return null
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
    });
  }

  appReload() {
    let theme = localStorage.getItem('theme');
    if (theme) {
      this.theme = theme;
      console.log(this.theme)
    }
    else {
      localStorage.setItem('theme', this.theme)
    }
    this.restart == true
    setTimeout(() => {
      this.restart == false
    }, 3000);
  }


  addNotifyLocal(data: any) {
    if (data) {
      let notifi = localStorage.getItem('notifications');
      if (notifi) {
        this.notification = JSON.parse(notifi);
        this.notification.push({ data });
        localStorage.setItem('notifications', JSON.stringify(this.notification));
        return
      }
      else {
        this.notification = [];
        this.notification.push({ data });
        localStorage.setItem('notifications', JSON.stringify(this.notification));
      }
    }
    else {
      let notifi = localStorage.getItem('notifications');
      if (notifi) {
        this.notification = JSON.parse(notifi);
      }
    }
  }

  removeNotification(id: string) {
    this.notification = this.notification.filter((item: any) => {
      if (item.data.id != id) {
        return item;
      }
    });
    localStorage.setItem('notifications', JSON.stringify(this.notification));
  }

  savePostLocal(event: any, data: any) {
    console.log("post save hited");
    if (event) {
      event.stopPropagation();
    }
    if (data) {
      let posts = localStorage.getItem('SavePost');
      if (posts) {
        posts = JSON.parse(posts);
        let duplicate = this.savedPost.find((obj)=> {
          return obj.id == data.id
        });
        if(duplicate){
          console.log(duplicate);
          return
        }else{
          this.savedPost.push(data);
          localStorage.setItem('SavePost', JSON.stringify(this.savedPost));
          this.markAsSavePost(data)
          
        }
      }
      else {
        this.savedPost = [];
        this.savedPost.push(data);
        this.markAsSavePost(data)
        localStorage.setItem('SavePost', JSON.stringify(this.savedPost));
      }
    }
    else {
      let post = localStorage.getItem('SavePost');
      if (post) {
        this.savedPost = JSON.parse(post);
      }
    }
  }

  removeLocalPost(event: any, data: any) {
    if (event) {
      event.stopPropagation();
    }
    this.savedPost = this.savedPost.filter((item: any) => {
      if (item.id != data.id) {
        return item;
      }
    });
    this.markAsUnsavePost(data);
    localStorage.setItem('SavePost', JSON.stringify(this.savedPost));
  }

  filterPost(id: any) {
    this.selectedPost = this.allPost.filter((item: any) => {
      if (item.id == id) {
        console.log(item)
        return item
      }
    })
  }

  async LangAlertNotification() {
    let lang = '';
    const header = 'Change language?';
    let subHeader = '';
    let msg = '';
    if (this.language == 'hindi') {
      subHeader = 'English Language';
      msg = 'This new in English.'
      lang = 'english'
    } if (this.language == 'english') {
      subHeader = 'हिन्दी भाषा';
      msg = 'ये न्यूज हिंदी भाषा में है!'
      lang = 'hindi'
    }
    console.log(lang)
    let isChagne;
    const alert = await this.alertController.create({
      mode: "ios",
      header: header,
      message: msg,
      subHeader: subHeader,
      backdropDismiss: true,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // this.menuCtr.close()
            isChagne = false
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log(lang)
            localStorage.setItem('language', lang);
            this.language = lang;
            if (this.language == 'hindi') {
              this.BaseUrl = App.BaseUrl2;
              console.log(this.BaseUrl);
              this.getAllNavCategory();
              this.getAllPost()
            }
            if (this.language == 'english') {

              this.BaseUrl = App.BaseUrl;
              console.log(this.BaseUrl)
              this.getAllNavCategory();
              this.getAllPost()
            }
            // this.menuCtr.close()
            isChagne = true
          },
        },
      ],

    });

    await alert.present();
    return isChagne
  }

  checkAppUpdate() {
    setInterval(() => {
      
      if (this.notificationCount > 0 && !this.notifyToastIsView) {
        this.toastController.dismiss()
        this.newPostToast('middle', 'You have ' + this.notificationCount + ' updated news! Please refresh page.')
      }
    }, 4000);
  }

  async newPostToast(position: 'top' | 'middle' | 'bottom', msg: string) {
    this.notifyToastIsView = true
    const toast = await this.toastController.create({
      message: msg,
      // duration: 2500,
      position: position,
      buttons: [
        {
          text: 'Refresh',
          role: 'cancel',
          handler: () => { 
            this.getAllPost(); 
            this.notificationCount = 0
            this.notifyToastIsView = false }
        }
      ]
    });

    await toast.present();
  }

  markAsSavePost(data:any){
    this.postData.find((obj:any)=> {
      if(obj.id == data.id){
        obj.saved = true
      }
    });
  }

  markAsUnsavePost(data:any){
    this.postData.find((obj:any)=> {
      if(obj.id == data.id){
        obj.saved = false
      }
    });
  }

  autoMarkAsSavePost(){
    for(let i = 0;i<this.savedPost.length;i++){
      this.postData.filter((obj:any)=> {
        if(obj.id == this.savedPost[i].id){
          obj.saved = true
        }
      });
    }
    
  }
}
