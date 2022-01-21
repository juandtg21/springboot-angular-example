import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from "rxjs";

@Injectable()
export class AuthorizationHeaderProvider {

  constructor(private auth: AuthService) {
  }

  retrieveAuthToken(): Observable<string> {
    return this.auth.getAccessTokenSilently();
  }

}
