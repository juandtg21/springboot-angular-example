import { StudentsComponent } from './students/students.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';

const routes: Routes =[
  {path:'',redirectTo:'/studentsComponent',pathMatch:'full'},
  {path:'appComponent',component:AppComponent},
  {path:'studentsComponent',component:StudentsComponent},
  {path:'createStudentComponent',component:CreateStudentComponent},
  {path:'updateStudentComponent/:id',component:UpdateStudentComponent},
  {path:'detailStudentComponent/:id',component:DetailStudentComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



