import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/account/sign-in/sign-in.component';

export const enum AppRoutes {
  SignIn = 'sign-in',
} 

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: AppRoutes.SignIn, component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
