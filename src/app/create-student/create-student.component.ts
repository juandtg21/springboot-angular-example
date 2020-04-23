import { StudentService } from './../students/student.service';
import { StudentsComponent } from './../students/students.component';
import { OK, CREATED } from './../model/httpStatus.model';
import { StudentModel } from './../model/student.model';
import {Router} from  "@angular/router";

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent implements OnInit {
  public student: StudentModel;
  public message: string="";

  constructor(private createService: StudentService, private router: Router) {
    
  
      this.student = new StudentModel();
      
    
    
    
   }

  ngOnInit(): void { }
  
  public createStudent(): void{

      this.createService.createStudent(this.student).subscribe(res=>{
        if(res.responseCode==CREATED){
          this.router.navigate(['/studentsComponent']);
        }
        else
        {

          this.message=res.message;
          
        }
      });
    }
 
  }

