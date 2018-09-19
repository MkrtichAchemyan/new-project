import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ColegeComponent} from "./colege/colege.component";
import {BusinessComponent} from "./business/business.component";
import {StudentsComponent} from "./students/students.component";
import {AuthGuard} from "./auth-guard.service";

const appRouts: Routes = [
  {path: "colege", component: ColegeComponent, canActivate: [AuthGuard]},
  {path: "business", component: BusinessComponent, canActivate: [AuthGuard]},
  {path: "students", component: StudentsComponent, canActivate: [AuthGuard]},
]

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
