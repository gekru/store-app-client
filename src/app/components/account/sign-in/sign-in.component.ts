import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { AppRoutes } from 'src/app/app-routing.module';
import { ConstantNames } from 'src/app/constants/constant-names';
import { SignInModel } from 'src/app/models/sign-in.model';
import { getEmailErrorMessage, getPasswordErrorMessage } from '../../shared/functions/form-group-error-messages';
import { signIn } from '../account-store/account.actions';
import { getServerError, isLoggedIn } from '../account-store/account.selectors';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})

export class SignInComponent implements OnInit {

  showPassword = true;
  formGroup: FormGroup;

  serverError$: Observable<Error> = this.store$.pipe(select(getServerError));
  isSignIn$: Observable<boolean> = this.store$.pipe(select(isLoggedIn));

  public isLoggedIn$ = this.store$.pipe(select(isLoggedIn)).subscribe(isLoggedIn => {
    if (isLoggedIn) {
      this.router.navigate(['/']);

      this.snackBar.open('Sign-In Successful', 'OK', {
        duration: 2500,
        verticalPosition: 'bottom',
        horizontalPosition: 'right',
        panelClass: ['green-snackbar'],
      });
    }
  });

  constructor(private store$: Store, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      [ConstantNames.email]: new FormControl(undefined, [
        Validators.required,
        Validators.email]),

      [ConstantNames.password]: new FormControl(undefined, [
        Validators.required,
        Validators.minLength(6)])
    });
  }

  onSignIn(signInModel: SignInModel) {
    if (this.formGroup.invalid) {
      return;
    }
    this.store$.dispatch(signIn({ signInModel }));
  }

  emailErrorMessage(): string {
    return getEmailErrorMessage(this.formGroup);
  }

  passwordErrorMessage(): string {
    return getPasswordErrorMessage(this.formGroup);
  }

  navigateToSignUp() {
    return this.router.navigate([AppRoutes.SignUp])
  }


  // Block for input Admin email and password

  inputAdminData: boolean;

  onAdminData() {

    if (!this.inputAdminData) {
      this.formGroup.get(ConstantNames.email).patchValue('adminmail@mail.com');
      this.formGroup.get(ConstantNames.password).patchValue('AdminPsw1!');
    }
    else {
      this.formGroup.get(ConstantNames.email).patchValue(undefined);
      this.formGroup.get(ConstantNames.password).patchValue(undefined);
    }

    this.inputAdminData = !this.inputAdminData;
  }
}
