import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitForm(data: any) {
    console.log(data);
}
title = 'login-page';
currentApplicationVersion = environment.appVersion;
constructor(
) {
}
}


