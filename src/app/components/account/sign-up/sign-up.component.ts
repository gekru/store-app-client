import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppRoutes } from 'src/app/app-routing.module';
import { SignUpModel } from 'src/app/models/sign-up.model';
import { signUp } from '../account-store/account.actions';
import { isSignedUp } from '../account-store/account.selectors';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  showPassword = true;
  showConfirmPassword = true;
  formGroup: FormGroup;

  public registerSuccess$ = this.store$.pipe(select(isSignedUp)).subscribe(isSignedUp => {
    if (isSignedUp) {
      this.router.navigate([AppRoutes.EmailConfirmation])
    }
  });

  constructor(private store$: Store, private router: Router) { }

  ngOnInit(): void {
    this.registerForm();
  }

  onSignUp(signUpModel: SignUpModel) {
    if (this.formGroup.invalid) {
      return;
    }
    this.store$.dispatch(signUp({ signUpModel }));
  }

  checkPasswords(group: FormGroup) {
    let password = group.get('password');
    let confirmPassword = group.get('confirmPassword');

    if (!confirmPassword.hasError('required') && password.value !== confirmPassword.value) {
      group.get('confirmPassword').setErrors({ notMatch: true });
    }
    return undefined;
  }

  registerForm() {
    this.formGroup = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
      ]),

      lastName: new FormControl('', [
        Validators.required,
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),

      confirmPassword: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'blur'
      }),
    }, {
      validators: [this.checkPasswords]
    });
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

  getConfirmPasswordErrorMessage() {

    let confirnPasswordField = this.formGroup.get('confirmPassword');

    if (confirnPasswordField.hasError('required')) {
      return 'Please confirm Your password';
    }

    if (confirnPasswordField.hasError('notMatch')) {
      return 'Passwords must match';
    }
  }

  // TODO: Fix method to navigate from html
  navigateToSignIn() {
    this.router.navigate([AppRoutes.SignIn])
  }

  // Block for input Account data

  inputAccountData: boolean;

  onAccountData() {

    if (!this.inputAccountData) {
      this.formGroup.get('firstName').patchValue('FirstName');
      this.formGroup.get('lastName').patchValue('LastName');
      this.formGroup.get('email').patchValue('anuitex@mailinator.com');
      this.formGroup.get('password').patchValue('Password1!');
      this.formGroup.get('confirmPassword').patchValue('Password1!');
    }
    else {
      this.formGroup.get('firstName').patchValue(undefined);
      this.formGroup.get('lastName').patchValue(undefined);
      this.formGroup.get('email').patchValue(undefined);
      this.formGroup.get('password').patchValue(undefined);
      this.formGroup.get('confirmPassword').patchValue(undefined);
    }

    this.inputAccountData = !this.inputAccountData;
  }
}