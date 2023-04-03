import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { appendFile } from 'fs';
import { DataService } from 'src/app/services/data.service';
import { App, icons } from 'src/AppConstant';

@Component({
  selector: 'app-slide-nav',
  templateUrl: './slide-nav.component.html',
  styleUrls: ['./slide-nav.component.scss'],
})
export class SlideNavComponent implements OnInit {
  isLoading: boolean = false;
  natTopNav: any[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    public dataService: DataService
  ) { }

  ngOnInit() {
    // this.getAllCategory();
  }

  getIcon(icon: string) {

    if (icon == 'Bollywood' || icon == 'इंटरटेनमेंट') {
      icon = icons.Bollywood;
      return icon;
    }
    if (icon == 'Business') {
      icon = icons.business;
      return icon;
    }

    if (icon == 'Career Update') {
      icon = icons.career;
      return icon;
    }

    if (icon == 'coronavirus') {

      return icon = icons.coronavirus;
    }

    if (icon == 'Fashion') {
      return icon = icons.fashion
    }

    if (icon == 'Food Mate') {
      return icon = icons.food
    }

    if (icon == 'Govt Schemes') {
      return icon = icons.government
    }

    if (icon == 'Health and Fitness' || icon == 'हैल्‍थ') {
      return icon = icons.heath
    }
    if (icon == 'Hollywood') {
      return icon = icons.hollywood
    }
    if (icon == 'Informative') {
      return icon = icons.Informative
    }
    if (icon == 'Inspiration' || icon == 'इन्स्पिरेशन') {
      return icon = icons.Inspiration
    }
    if (icon == 'Lifestyle') {
      return icon = icons.lifetyle
    }
    if (icon == 'News') {
      return icon = icons.news
    }
    if (icon == 'Political News') {
      return icon = icons.politics
    }
    if (icon == 'Relation') {
      return icon = icons.relation
    }
    if (icon == 'Sports' || icon == 'स्पोर्ट्स') {
      return icon = icons.Sports
    }
    if (icon == 'Technology') {
      return icon = icons.tech
    }
    if (icon == 'Travel' || icon == 'ट्रेंडिंग') {
      return icon = icons.travel
    }
    if (icon == 'Uncategorized') {
      return icon = icons.uncategorized
    }
    if (icon == 'Videos') {
      return icon = icons.video
    }
    if (icon == 'Viral' || icon == 'वायरल वीडियो') {
      return icon = icons.viral
    }
    if (icon == 'Web Series' || icon == 'टॉप न्यूज़') {
      return icon = icons.webseries
    }
    if (icon == 'अन्‍य') {
      return icon = icons.politics
    }
    else {
      return icon = icons.politics
    }
  }

  goToPage(id: string) {
    this.dataService.selectedCategory = id
    this.router.navigate(['tabs/tab1/category/', id]);
  }
}
