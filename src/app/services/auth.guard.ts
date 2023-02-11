import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService,
    private router: Router) { }

  // canActivate(): boolean {
  //   if (this.loginService.loggedIn()) {
  //     console.log('true')
  //     this.router.navigate(['/homepage'])
  //     return true
  //   } else {
  //     console.log('false')            
  //     this.router.navigate([''])
  //     return false
  //   }
  // }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }

}

