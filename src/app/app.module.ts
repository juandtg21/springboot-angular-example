import { StudentService } from './students/student.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import {FormsModule} from '@angular/forms';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './auth/auth-interceptor.service';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    DetailStudentComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('authToken')
      }
    })
  ],
  providers: [StudentService,  AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
