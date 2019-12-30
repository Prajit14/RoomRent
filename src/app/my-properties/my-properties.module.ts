import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPropertiesPageRoutingModule } from './my-properties-routing.module';

import { MyPropertiesPage } from './my-properties.page';

import {StarRatingModule} from 'ionic4-star-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarRatingModule,
    MyPropertiesPageRoutingModule
  ],
  declarations: [MyPropertiesPage]
})
export class MyPropertiesPageModule {}
