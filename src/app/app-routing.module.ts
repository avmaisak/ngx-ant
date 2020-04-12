import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRootComponent } from './app-root/app-root.component';

const routes: Routes = [
  { path: '', component: AppRootComponent },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
