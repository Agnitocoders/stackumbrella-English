import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { App } from '@capacitor/app';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit  {
  collapsed: boolean = true;
  constructor(
    private router: Router,
    public menuCtr: MenuController,
    public dataService: DataService
  ) { }

  ngOnInit() {
  }

  goToPage(pageName: string) {

    if (pageName == 'logout') {
      App.exitApp();
    }
    else {
      this.router.navigate([pageName]);
      this.menuCtr.close();
    }

  }

  goToExPage(url: string){
    window.open(url, '_system')
  }

  changeLanguage() {
    this.menuCtr.close();
    this.router.navigate(['tabs']);
    let lang
    if (this.dataService.language === 'hindi') {
      lang = 'english'
    }
    if (this.dataService.language === 'english') {
      lang = 'english'
    }
    this.dataService.LangAlert()
  }

  goTocCatPage(id: string) {
    this.menuCtr.close();
    this.dataService.selectedCategory = id
    this.router.navigate(['tabs/tab1/category/', id]);

  }

  doCollaps() {
    this.collapsed = !this.collapsed;
    console.log(this.collapsed)
  }

  changeTheme(){
    if(this.dataService.theme == 'light'){
      this.dataService.theme = 'dark';
      localStorage.setItem('theme', this.dataService.theme);
    }else{
      this.dataService.theme = 'light';
      localStorage.setItem('theme', this.dataService.theme);
    }
    // this.menuCtr.close();
    console.log(this.dataService.theme);
  }
}
