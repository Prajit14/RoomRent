import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPropertiesPageRoutingModule } from './add-properties-routing.module';

import { AddPropertiesPage } from './add-properties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPropertiesPageRoutingModule
  ],
  declarations: [AddPropertiesPage]
})
export class AddPropertiesPageModule {}
