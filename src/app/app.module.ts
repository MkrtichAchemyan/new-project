import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EducationCenterComponent } from './education-center/education-center.component';
import { BusinessComponent } from './business/business.component';

import {AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule} from '@angular/common/http';
import {HttpService} from './http.service';
import {FormsModule} from '@angular/forms';
import {EducationCenterGuardService} from './education-center-guard.service';
import {BusinesGuardService} from './busines-guard.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SidebarModule} from 'ng-sidebar';
import { StudentsComponent } from './students/students.component';
import { StudentListComponent } from './education-center/student-list/student-list.component';
import { DashboardComponent } from './education-center/dashboard/dashboard.component';
import { LectureListComponent } from './education-center/lecture-list/lecture-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EducationCenterComponent,
    BusinessComponent,
    LoginComponent,
    StudentsComponent,
    StudentListComponent,
    DashboardComponent,
    LectureListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    SidebarModule.forRoot()
  ],
  providers: [
    HttpService,
    EducationCenterGuardService,
    BusinesGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
