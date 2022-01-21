import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthorizationHeaderProvider } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private router: Router,
    private authProvider: AuthorizationHeaderProvider
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authProvider.retrieveAuthToken().pipe(mergeMap((token) => {
        if (token) {
            req = req.clone({ headers : req.headers.set('Authorization', 'Bearer ' + token)})
        }

        if (!req.headers.has('Consent-Type')) {
            req = req.clone({ headers: req.headers.set('Consent-Type', 'application/json')})
        }

        return next.handle(req);
    }));

  }
}