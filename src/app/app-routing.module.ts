import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'my-properties',
    loadChildren: () => import('./my-properties/my-properties.module').then( m => m.MyPropertiesPageModule)
  },
  {
    path: 'add-properties',
    loadChildren: () => import('./add-properties/add-properties.module').then( m => m.AddPropertiesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
