import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailConfirmationComponent } from './components/account/email-confirmation/email-confirmation.component';
import { EmailConfirmedComponent } from './components/account/email-confirmed/email-confirmed.component';
import { SignInComponent } from './components/account/sign-in/sign-in.component';
import { SignUpComponent } from './components/account/sign-up/sign-up.component';

export const enum AppRoutes {
  SignIn = 'sign-in',
  SignUp = 'sign-up',
  EmailConfirmation = "email-confirmation",
  EmailConfirmed = "email-confirmed",

} 

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: AppRoutes.SignIn, component: SignInComponent},
  {path: AppRoutes.SignUp, component: SignUpComponent},
  {path: AppRoutes.EmailConfirmation, component: EmailConfirmationComponent},
  {path: AppRoutes.EmailConfirmed, component: EmailConfirmedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
