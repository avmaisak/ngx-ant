import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoIndexComponent } from './pages/demo-index/demo-index.component';

const routes: Routes = [
  { path: '', component: DemoIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
