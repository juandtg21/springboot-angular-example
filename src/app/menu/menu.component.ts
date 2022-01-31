import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  login(): void {
    // Call this to redirect the user to the login page
    this.auth.loginWithRedirect();
  }

  logout(): void {
    this.auth.logout();
  }

}
