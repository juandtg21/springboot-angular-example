import { StudentService } from './students/student.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import {FormsModule} from "@angular/forms";
import { UpdateStudentComponent } from './update-student/update-student.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { AuthorizationHeaderProvider } from './auth/auth.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    DetailStudentComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        allowedList: [
        {
          uri: `${env.dev.serverUrl}/api/private/GetStudents`,
          tokenOptions: {
            audience: env.auth.audience
          },
        },
      ],
      },
    }),
  ],
  providers: [StudentService, AuthorizationHeaderProvider,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
