import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPropertiesPage } from './add-properties.page';

const routes: Routes = [
  {
    path: '',
    component: AddPropertiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPropertiesPageRoutingModule {}
