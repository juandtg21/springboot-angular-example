import { OK } from './../model/httpStatus.model';
import { StudentModel } from './../model/student.model';
import {ActivatedRoute, Router} from  "@angular/router";
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../students/student.service';


@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  
  public student: StudentModel;
  id:number;
  public message: string="";

  constructor(private updateService:StudentService, private route: ActivatedRoute, private router:Router) { 
    
  }

  ngOnInit(): void {
    
    this.loadStudent();
    
  }
  public loadStudent():void{
    this.id=this.route.snapshot.params['id'];
    this.updateService.getStudent(this.id).subscribe(res=>{this.student=res});
      
  }
  public updateStudent(): void{

    this.updateService.updateStudent(this.student).subscribe(res=>{
      if(res.responseCode==OK){
        this.router.navigate(['/studentsComponent']);
      }
      else
      {

        this.message=res.message;
        
      }
    });
  }

}
