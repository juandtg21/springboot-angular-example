import { StudentsComponent } from './students/students.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes =[
  {path:'',redirectTo:'/loginComponent',pathMatch:'full', canActivate: [AuthGuard]},
  {path:'appComponent',component:AppComponent},
  {path:'studentsComponent',component:StudentsComponent},
  {path:'createStudentComponent',component:CreateStudentComponent},
  {path:'updateStudentComponent/:id',component:UpdateStudentComponent},
  {path:'detailStudentComponent/:id',component:DetailStudentComponent},
  {path:'loginComponent',component:LoginComponent, canActivate: [AuthGuard]},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



