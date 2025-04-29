import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username = '';
  password = '';
  message = '';  // Variable to store the success/error message
  messageType = '';  // To store the type of message (success/error)

  constructor(private auth: AuthService,  private router: Router) {}

  register(): void {
    const user = {
      username: this.username,
      password: this.password
    };

    this.auth.register(user.username, user.password)
      .subscribe(
        (response: any) => {
          this.message = 'Registration successful! Please login to continue.';  // Display success message
          this.messageType = 'success';  // Success type

          // Navigate to the login page after 3 seconds, handling the promise
          this.router.navigate(['/loginComponent']).then(() => {
            // Additional logic after navigation if needed
            console.log('Navigation to login page successful');
          }).catch((error) => {
            // Handle navigation error if any
            console.error('Navigation error:', error);
          });
        },
        (error: any) => {
          console.error('Registration failed', error.error);
          this.message = error.error || 'An error occurred. Please try again.';  // Display error message
          this.messageType = 'error';  // Error type
        }
      );
  }

  goToLogin(): void {
    this.router.navigate(['/loginComponent']).then(() => {
      console.log('Navigated to login page');
    }).catch(error => {
      console.error('Navigation error:', error);
    });
  }

}
