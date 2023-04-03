import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NoSanitizePipe } from './util/nosanitizerpipe';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { InViewportDirective } from 'ng-in-viewport';
import { InViewportModule } from 'ng-in-viewport';
// import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';

@NgModule({
  declarations: [AppComponent,],
  imports: [
    HttpClientModule, 
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,  
    InViewportDirective,
    InViewportModule
  ],
  providers: [
    NoSanitizePipe,
    SocialSharing,
    // FCM,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
