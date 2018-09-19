import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColegeComponent } from './colege/colege.component';
import { StudentsComponent } from './students/students.component';
import { BusinessComponent } from './business/business.component';

import {AppRoutingModule} from "./app-routing.module";

import {AuthGuard} from "./auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    ColegeComponent,
    StudentsComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
