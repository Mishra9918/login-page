import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private injector:Injector) { }
  intercept(req:any, next:any) {
    let loginService = this.injector.get(LoginService)
    let token = loginService.getToken();
    //set the header for http  request
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('x-access-token', token ? token : "")
      }
    )
    return next.handle(tokenizedReq);
  }

  

}
