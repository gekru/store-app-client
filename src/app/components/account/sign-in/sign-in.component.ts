import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { SignInModel } from 'src/app/models/sign-in.model';
import { signIn } from '../account-store/account.actions';
import { getLoading, getServerError, isLoggedIn } from '../account-store/account.selectors';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})

export class SignInComponent implements OnInit {

  showPassword = true;
  formGroup: FormGroup;

  loading$: Observable<boolean> = this.store$.pipe(select(getLoading));
  serverError$: Observable<String[]> = this.store$.pipe(select(getServerError));

  public isLoggedIn$ = this.store$.pipe(select(isLoggedIn)).subscribe(isLoggedIn => {
    if (isLoggedIn) {
      this.router.navigate(['/']);
    }
  });

  constructor(private store$: Store, private router: Router) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email]),

      password: new FormControl('', [
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

  getEmailErrorMessage() {

    let emailField = this.formGroup.get('email');

    if (emailField.hasError('required')) {
      return 'Please enter an email address';
    }

    if (emailField.hasError('email')) {
      return 'Not a valid email';
    }
  }

  getPasswordErrorMessage() {

    let passwordField = this.formGroup.get('password');

    if (passwordField.hasError('required')) {
      return 'Please enter a password';
    }

    if (passwordField.hasError('minlength')) {
      return 'The password you provided must have at least 6 characters';
    }
  }


  // Block for input Admin email and password

  inputAdminData: boolean;

  onAdminData() {

    if (!this.inputAdminData) {
      this.formGroup.get('email').patchValue('adminmail@mail.com');
      this.formGroup.get('password').patchValue('AdminPsw1!');
    }
    else {
      this.formGroup.get('email').patchValue('');
      this.formGroup.get('password').patchValue('');
    }

    this.inputAdminData = !this.inputAdminData;
  }
}
