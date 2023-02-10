import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

const routes: Routes = [
  {path:'registrationPage',component:RegistrationPageComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],  exports: [RouterModule]
})
export class AppRoutingModule { }
