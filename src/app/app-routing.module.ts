import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailConfirmationComponent } from './components/account/email-confirmation/email-confirmation.component';
import { EmailConfirmedComponent } from './components/account/email-confirmed/email-confirmed.component';
import { ForgotPasswordComponent } from './components/account/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/account/reset-password/reset-password.component';
import { SignInComponent } from './components/account/sign-in/sign-in.component';
import { SignUpComponent } from './components/account/sign-up/sign-up.component';
import { PrintingEditionDetailComponent } from './components/printing-edition/printing-edition-detail/printing-edition-detail.component';
import { PrintingEditionComponent } from './components/printing-edition/printing-edition/printing-edition.component';

export const enum AppRoutes {
  SignIn = 'sign-in',
  SignUp = 'sign-up',
  EmailConfirmation = 'email-confirmation',
  EmailConfirmed = 'email-confirmed',
  ForgotPassword = 'forgot-password',
  ResetPassword = 'reset-password',
  PrintingEditions = 'printing-editions',
  PrintingEditionDetail = 'printing-editions/detail/:id',
}

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: AppRoutes.SignIn, component: SignInComponent },
  { path: AppRoutes.SignUp, component: SignUpComponent },
  { path: AppRoutes.EmailConfirmation, component: EmailConfirmationComponent },
  { path: AppRoutes.EmailConfirmed, component: EmailConfirmedComponent },
  { path: AppRoutes.ForgotPassword, component: ForgotPasswordComponent },
  { path: AppRoutes.ResetPassword, component: ResetPasswordComponent },
  { path: AppRoutes.PrintingEditions, component: PrintingEditionComponent },
  { path: AppRoutes.PrintingEditionDetail, component: PrintingEditionDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
