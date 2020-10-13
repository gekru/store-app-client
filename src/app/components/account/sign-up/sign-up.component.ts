import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppRoutes } from 'src/app/app-routing.module';
import { ConstantNames } from 'src/app/constants/constant-names';
import { SignUpModel } from 'src/app/models/sign-up.model';
import { checkPasswords, getConfirmPasswordErrorMessage, getEmailErrorMessage, getPasswordErrorMessage } from '../../shared/functions/form-group-error-messages';
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

  registerForm() {
    this.formGroup = new FormGroup({
      [ConstantNames.firstName]: new FormControl(undefined, [
        Validators.required,
      ]),

      [ConstantNames.lastName]: new FormControl(undefined, [
        Validators.required,
      ]),

      [ConstantNames.email]: new FormControl(undefined, [
        Validators.required,
        Validators.email
      ]),

      [ConstantNames.password]: new FormControl(undefined, {
        validators: [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(ConstantNames.passwordRegExp) 
      ]}),
      
      [ConstantNames.confirmPassword]: new FormControl(undefined, {
        validators: [Validators.required],
        updateOn: 'blur',
      }),
    }, {
      validators: [checkPasswords]
    });
  }

  emailErrorMessage(): string {
    return getEmailErrorMessage(this.formGroup);
  }

  passwordErrorMessage(): string {
    return getPasswordErrorMessage(this.formGroup);
  }

  confirmPasswordErrorMessage(): string {
    return getConfirmPasswordErrorMessage(this.formGroup);
  }

  // TODO: Fix method to navigate from html
  navigateToSignIn() {
    this.router.navigate([AppRoutes.SignIn])
  }

  // Block for input Account data

  inputAccountData: boolean;

  onAccountData() {

    if (!this.inputAccountData) {
      this.formGroup.get(ConstantNames.firstName).patchValue('FirstName');
      this.formGroup.get(ConstantNames.lastName).patchValue('LastName');
      this.formGroup.get(ConstantNames.email).patchValue('anuitex@mailinator.com');
      this.formGroup.get(ConstantNames.password).patchValue('Password1!');
      this.formGroup.get(ConstantNames.confirmPassword).patchValue('Password1!');
    }
    else {
      this.formGroup.get(ConstantNames.firstName).patchValue(undefined);
      this.formGroup.get(ConstantNames.lastName).patchValue(undefined);
      this.formGroup.get(ConstantNames.email).patchValue(undefined);
      this.formGroup.get(ConstantNames.password).patchValue(undefined);
      this.formGroup.get(ConstantNames.confirmPassword).patchValue(undefined);
    }

    this.inputAccountData = !this.inputAccountData;
  }
}