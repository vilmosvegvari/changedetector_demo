import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test/test1/test1.component';
import { Test2Component } from './test/test2/test2.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { TestOnpushComponent } from './test-onpush/test-onpush.component';
import { Test1OnpushComponent } from './test-onpush/test1-onpush/test1-onpush.component';
import { Test2OnpushComponent } from './test-onpush/test2-onpush/test2-onpush.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
    Test2Component,
    TestOnpushComponent,
    Test1OnpushComponent,
    Test2OnpushComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
