import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppRoutes } from 'src/app/app-routing.module';
import { ConstantNames } from 'src/app/constants/constant-names';
import { ResetPasswordModel } from 'src/app/models/reset-password';
import { checkPasswords, getConfirmPasswordErrorMessage, getPasswordErrorMessage } from '../../shared/functions/form-group-error-messages';
import { resetPassword } from '../account-store/account.actions';
import { getServerError, isPasswordRecovered } from '../account-store/account.selectors';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  showPassword = true;
  showConfirmPassword = true;
  formGroup: FormGroup;
  email: string = undefined;
  token: string = undefined;

  isPasswordRecovered$: Observable<boolean> = this.store$.pipe(select(isPasswordRecovered));
  errors$: Observable<String[]> = this.store$.pipe(select(getServerError));

  constructor(private store$: Store, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(queryParams => {
      this.email = queryParams.get(ConstantNames.email);
      this.token = queryParams.get(ConstantNames.token);
    });

    this.resetPasswordForm();
  }

  onResetPassword(resetPasswordModel: ResetPasswordModel) {
    if (this.formGroup.invalid) {
      return;
    }
    this.store$.dispatch(resetPassword({ resetPasswordModel }));
  }

  resetPasswordForm() {

    this.formGroup = new FormGroup({
      [ConstantNames.email]: new FormControl(),
      [ConstantNames.token]: new FormControl(),

      [ConstantNames.password]: new FormControl(undefined, [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(ConstantNames.passwordRegExp) 
      ]),

      [ConstantNames.confirmPassword]: new FormControl(undefined, {
        validators: [Validators.required],
        updateOn: 'blur'
      }),
    }, {
      validators: [checkPasswords]
    });

    this.formGroup.get(ConstantNames.email).setValue(this.email);
    this.formGroup.get(ConstantNames.token).setValue(this.token);
  }

  passwordErrorMessage(): string {
    return getPasswordErrorMessage(this.formGroup);
  }

  confirmPasswordErrorMessage(): string {
    return getConfirmPasswordErrorMessage(this.formGroup);
  }

  navigateSignIn() {
    return this.router.navigate([AppRoutes.SignIn])
  }
}
