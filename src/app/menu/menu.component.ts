import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  username = '';
  password = '';

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void { }

  login(): void {
    this.auth.login(this.username, this.password).subscribe({
      next: (response) => {
        this.auth.saveToken(response.token);
        this.router.navigate(['/studentsComponent']).then(
          (success) => {
            if (success) {
              console.log('Navigation successful!');
            } else {
              console.error('Navigation failed!');
            }
          }
        );
      },
      error: (err) => {
        console.error('Login failed', err);
      }
    });
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/loginComponent']).then(
      (success) => {
        if (success) {
          console.log('Logged out and redirected!');
        } else {
          console.error('Failed to redirect after logout!');
        }
      }
    );
  }
}
