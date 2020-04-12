import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoIndexComponent } from './pages/demo-index/demo-index.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ DemoIndexComponent],
  imports: [
    CommonModule,
    SharedModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
