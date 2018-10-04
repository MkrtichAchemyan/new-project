import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EducationCenterComponent} from "./education-center/education-center.component";
import {BusinessComponent} from "./business/business.component";
import {LoginComponent} from './login/login.component';
import {EducationCenterGuardService} from './education-center-guard.service';
import {BusinesGuardService} from './busines-guard.service';
import {StudentListComponent} from './education-center/student-list/student-list.component';
import {DashboardComponent} from './education-center/dashboard/dashboard.component';
import {LectureListComponent} from './education-center/lecture-list/lecture-list.component';

const appRouts: Routes = [
  {path: "", component: LoginComponent},
  {path: "educationcenter", component: EducationCenterComponent, canActivate: [EducationCenterGuardService],
  children:[
    {path: "students", component: StudentListComponent},
    {path: "lecturers", component: LectureListComponent},
    {path: "", component: DashboardComponent},
  ]
  },
  {path: "busines", component: BusinessComponent, canActivate: [BusinesGuardService]},
  {path: "**", redirectTo: "/"}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRouts),
    RouterModule.forChild(appRouts)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
