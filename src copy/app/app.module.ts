import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NoSanitizePipe } from './util/nosanitizerpipe';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { InViewportDirective } from 'ng-in-viewport';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
@NgModule({
  declarations: [AppComponent,],
  imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, InViewportDirective],
  providers: [
    NoSanitizePipe,
    SocialSharing,
    InAppBrowser,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
