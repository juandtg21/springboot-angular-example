import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { StudentModel } from '../model/student.model';
import { Observable } from 'rxjs';
import { RestResponse } from './../model/RestResponse.model';



@Injectable()
export class StudentService {

  id:number;
  constructor(private http:HttpClient) { }

  public getStudents():Observable<StudentModel[]>{
    return this.http.get<StudentModel[]>("http://localhost:8080/GetStudents")
    };
    public deleteStudent(id):Observable<RestResponse>{
      console.log(id);
      return this.http.delete<RestResponse>(`http://localhost:8080/deleteStudent/${id}`);
      
     }
     
     public getStudent(id){
       return this.http.get<StudentModel>(`http://localhost:8080/getStudentById/${id}`);
     
     }
     public updateStudent(student:StudentModel):Observable<RestResponse>{
      return this.http.post<RestResponse>("http://localhost:8080/updateStudent",JSON.stringify(student));
     }
     public createStudent(student:StudentModel):Observable<RestResponse>{
      return this.http.post<RestResponse>("http://localhost:8080/createStudent",JSON.stringify(student));
     }
     
     
}
