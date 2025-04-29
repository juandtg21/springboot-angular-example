import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.dev.serverUrl;
  private loggedIn = new BehaviorSubject<boolean>(this.hasValidToken());  // Manage login status

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, { username, password });
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, { username, password });
  }

  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
    this.loggedIn.next(true);  // Update login status
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.loggedIn.next(false);  // Update login status
  }

  isAuthenticated(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  private hasValidToken(): boolean {
    const token = this.getToken();
    if (!token) { return false; }
    const expiry = this.getTokenExpirationDate(token);
    if (!expiry) { return false; }
    return expiry.valueOf() > new Date().valueOf();
  }

  private getTokenExpirationDate(token: string): Date | null {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      if (!payload.exp) {
        return null;
      }
      const date = new Date(0);
      date.setUTCSeconds(payload.exp);
      return date;
    } catch (error) {
      return null;
    }
  }
}
