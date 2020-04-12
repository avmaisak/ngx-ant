import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
