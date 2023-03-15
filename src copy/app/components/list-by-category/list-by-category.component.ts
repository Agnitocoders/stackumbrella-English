import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';
import { App } from 'src/AppConstant';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-list-by-category',
  templateUrl: './list-by-category.component.html',
  styleUrls: ['./list-by-category.component.scss'],
})
export class ListByCategoryComponent implements OnInit {

  @Input() id: string = '';
  data: any = [] = [];
  isLoading: boolean = false;
  page = 0

  @ViewChild(IonInfiniteScroll)
  infiniteScroll!: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll)
  virtualScroll!: IonVirtualScroll;


  constructor(
    public dataService: DataService,
    private http: HttpClient,
    private router: Router,
    private socialSharing: SocialSharing,
  ) { }

  async ngOnInit() {
    this.id = this.dataService.selectedCategory;
    this.getRecords();
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      this.getRecords()
      event.target.complete();
    }, 2000);
  };

  async getRecords() {
    this.page = this.page + 1;
    console.log(this.page);
    var updatedData: any[] = []
    try {
      this.isLoading = true
      this.http.get(this.dataService.BaseUrl + App.PostFix + App.PostPage + this.page + App.PostCategory + this.id + App.Embd)
        .subscribe((resp: any) => {
          updatedData = resp;
          resp.forEach((element: any) => {
            element.saved = false;
            this.data.push(element)
          });
        });
      this.isLoading = false
      console.log(this.data)
    } catch (error) {
      console.log(error);
      alert('error');
      this.isLoading = false
    }
  }

  loadData(event: any) {
    setTimeout(() => {
      this.getRecords()
      event.target.complete();
      if (this.data.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  gotoDetailsPage(val: any) {
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

  savePostLocal(event: any, data: any) {
    console.log("post save hited");
    if (event) {
      event.stopPropagation();
    }
    if (data) {
      let posts = localStorage.getItem('SavePost');
      if (posts) {
        posts = JSON.parse(posts);
        let duplicate = this.dataService.savedPost.find((obj)=> {
          return obj.id == data.id
        });
        if(duplicate){
          console.log(duplicate);
          return
        }else{
          this.dataService.savedPost.push(data);
          localStorage.setItem('SavePost', JSON.stringify(this.dataService.savedPost));
          this.markAsSavePost(data)
          
        }
      }
      else {
        this.dataService.savedPost = [];
        this.dataService.savedPost.push(data);
        this.markAsSavePost(data)
        localStorage.setItem('SavePost', JSON.stringify(this.dataService.savedPost));
      }
    }
    else {
      let post = localStorage.getItem('SavePost');
      if (post) {
        this.dataService.savedPost = JSON.parse(post);
      }
    }
  }

  removeLocalPost(event: any, data: any) {
    if (event) {
      event.stopPropagation();
    }
    this.dataService.savedPost = this.dataService.savedPost.filter((item: any) => {
      if (item.id != data.id) {
        return item;
      }
    });
    this.markAsUnsavePost(data);
    localStorage.setItem('SavePost', JSON.stringify(this.dataService.savedPost));
  }

  markAsSavePost(data:any){
    this.data.find((obj:any)=> {
      if(obj.id == data.id){
        obj.saved = true
      }
    });
  }

  markAsUnsavePost(data:any){
    this.data.find((obj:any)=> {
      if(obj.id == data.id){
        obj.saved = false
      }
    });
  }

  autoMarkAsSavePost(){
    for(let i = 0;i<this.dataService.savedPost.length;i++){
      this.data.filter((obj:any)=> {
        if(obj.id == this.dataService.savedPost[i].id){
          obj.saved = true
        }
      });
    }
    
  }

}