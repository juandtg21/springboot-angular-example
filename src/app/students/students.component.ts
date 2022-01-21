import { UpdateStudentComponent } from './../update-student/update-student.component';
import { CreateStudentComponent } from './../create-student/create-student.component';


import { NO_CONTENT } from '../model/httpStatus.model';
import { StudentModel } from './../model/student.model';
import { StudentService } from './student.service';
import {Router} from  "@angular/router";


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers:[StudentService]
})
export class StudentsComponent implements OnInit {
  public students:Array<StudentModel>;
  public message: string="";


  constructor(private studentservice:StudentService, private router:Router) { }

  ngOnInit(): void{
    this.loadStudent();
  }

  private loadStudent():void{
    this.studentservice.getStudents().subscribe(res=>{
      this.students=res;
    });
  }
  public editStudent(id){
    this.router.navigate(['updateStudentComponent',id]);
    

  }
  public detailStudent(id){
    this.router.navigate(['detailStudentComponent',id]);
    

  }
  public deleteStudent(student:StudentModel):void{
   this.studentservice.deleteStudent(student.id).subscribe(res=>{
     if(res.responseCode==NO_CONTENT)
     {
        this.message=res.message ;
        this.loadStudent();
     }
   });    
  }

}
