import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavePostsPageRoutingModule } from './save-posts-routing.module';

import { SavePostsPage } from './save-posts.page';
import { ComponentsModule } from 'src/app/components/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavePostsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SavePostsPage]
})
export class SavePostsPageModule {}
