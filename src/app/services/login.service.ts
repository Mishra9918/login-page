import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }

  otp(mobile: any) {
    return this.http.post(`${environment.apiURL}login`, { mobile });

  }

  login(payload: any) {
    return this.http.post(`${environment.apiURL}verify/otp`, payload)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    }
    else {
      return false;
    }
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

}

