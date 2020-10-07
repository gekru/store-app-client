import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/account/sign-in/sign-in.component';
import { SignUpComponent } from './components/account/sign-up/sign-up.component';

export const enum AppRoutes {
  SignIn = 'sign-in',
  SignUp = 'sign-up',
} 

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: AppRoutes.SignIn, component: SignInComponent},
  {path: AppRoutes.SignUp, component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
