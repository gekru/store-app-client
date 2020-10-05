import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { accountReducer, ACCOUNT_FEATURE_NAME } from 'src/app/components/account/account-store/account.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AccountEffects } from 'src/app/components/account/account-store/account.effects';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from 'src/app/components/account/sign-in/sign-in.component';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(ACCOUNT_FEATURE_NAME, accountReducer),
    EffectsModule.forFeature([AccountEffects])
  ]
})
export class AccountModule { }
