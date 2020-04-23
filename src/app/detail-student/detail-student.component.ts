import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../model/student.model';
import { StudentService } from '../students/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent implements OnInit {
  student: StudentModel;
  id:number;
  public message: string="";
  
  constructor(private detailService:StudentService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.loadStudent();
  }
  public loadStudent():void{
    this.id=this.route.snapshot.params['id'];
    this.detailService.getStudent(this.id).subscribe(res=>{this.student=res});
      
  }
  public backtolist(): void
  {
    this.router.navigate(['/studentsComponent']);
  }

}
