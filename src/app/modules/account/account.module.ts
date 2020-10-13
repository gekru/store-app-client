import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { accountReducer, ACCOUNT_FEATURE_NAME } from 'src/app/components/account/account-store/account.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AccountEffects } from 'src/app/components/account/account-store/account.effects';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from 'src/app/components/account/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/components/account/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { EmailConfirmationComponent } from 'src/app/components/account/email-confirmation/email-confirmation.component';
import { ForgotPasswordComponent } from 'src/app/components/account/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from 'src/app/components/account/reset-password/reset-password.component';
import { EmailConfirmedComponent } from 'src/app/components/account/email-confirmed/email-confirmed.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    EmailConfirmationComponent,
    EmailConfirmedComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature(ACCOUNT_FEATURE_NAME, accountReducer),
    EffectsModule.forFeature([AccountEffects])
  ]
})
export class AccountModule { }
