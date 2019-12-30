import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'my-properties', pathMatch: 'full' },
  { path: 'myproperties', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'my-properties',
    loadChildren: () => import('./my-properties/my-properties.module').then( m => m.MyPropertiesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
