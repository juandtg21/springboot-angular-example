import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        this.authService.saveToken(response.token);
        this.router.navigate(['/studentsComponent']).then(() => {
          // Navigation complete, you can add any post-navigation logic here if needed
        }).catch((err) => {
          // Handle error if navigation fails
          console.error('Navigation error:', err);
        });
      },
      (error) => {
        this.errorMessage = error + '. Invalid credentials';
      }
    );
  }
}
