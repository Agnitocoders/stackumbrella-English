import { Component, OnInit, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() canGoback: string = '';
  canGo = ''
  constructor(
    public router: Router,
    public dataService: DataService
    ) { }

  ngOnInit() {
    this.canGo = this.canGoback
  }

  gotoSearch() {
    this.router.navigate(['/tabs/tab1/searches'])
  }

  gotoNotification() {
    this.router.navigate(['/tabs/tab1/notification'])
  }


}
