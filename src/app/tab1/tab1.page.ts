import { Component } from '@angular/core';
import { AdMobService } from '../services/adMob/ad-mob.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public dataService: DataService,
    public adService: AdMobService
  ) { }
}
