import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdMobService } from 'src/app/services/adMob/ad-mob.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  categoryId = ''

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private dataService: DataService,
    public adService: AdMobService
  ) {
    
  }

  ngOnInit() {
    this.adService.addInitalAdd();
    // const id = this.activeRoute.snapshot.queryParamMap.get('id')
    // console.log(id);
    // console.log(id);

  }

  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      // this.getRecords
      event.target.complete();
    }, 2000);
  };

}
