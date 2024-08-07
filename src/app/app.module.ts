import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgTableModule} from "../../projects/ng-table/src/lib/ng-table.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
