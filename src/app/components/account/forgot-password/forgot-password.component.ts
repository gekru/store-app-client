import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { forgotPassword } from '../account-store/account.actions';
import { getServerError, isEmailExist } from '../account-store/account.selectors';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  formGroup: FormGroup;

  isEmailExist$ = this.store$.pipe(select(isEmailExist));
  errors$: Observable<String[]> = this.store$.pipe(select(getServerError));

  constructor(private store$: Store, private router: Router) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email])
    });

  }

  navigateToResetPassword() {
    return this.router.navigate([''])
  }

  onSubmit(email: string) {
    if (this.formGroup.invalid) {
      return;
    }

    this.store$.dispatch(forgotPassword({ payload: email }));
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

}
