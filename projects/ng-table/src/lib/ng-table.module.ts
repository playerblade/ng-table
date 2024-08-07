import { NgModule } from '@angular/core';
import { NgTableComponent } from './ng-table.component';
import {CommonModule, NgForOf} from "@angular/common";

@NgModule({
  declarations: [
    NgTableComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgTableComponent
  ]
})
export class NgTableModule { }
