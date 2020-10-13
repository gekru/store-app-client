import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ConstantNames } from 'src/app/constants/constant-names';
import { getEmailErrorMessage } from '../../shared/functions/form-group-error-messages';
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
  errors$: Observable<Error> = this.store$.pipe(select(getServerError));

  constructor(private store$: Store, private router: Router) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      [ConstantNames.email]: new FormControl(undefined, [
        Validators.required,
        Validators.email])
    });

  }

  navigateToHome() {
    return this.router.navigate([''])
  }

  onSubmit(email: string) {
    if (this.formGroup.invalid) {
      return;
    }

    this.store$.dispatch(forgotPassword({ payload: email }));
  }

  emailErrorMessage() {
    return getEmailErrorMessage(this.formGroup);
  }
}
