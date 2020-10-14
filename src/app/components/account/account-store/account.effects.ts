import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AccountService } from 'src/app/services/account.service';
import { signIn, signInFailure, AccountActions, signOut, signOutFailure, signUp, signUpFailure, forgotPassword, forgotPasswordFailure, resetPassword, resetPasswordFailure } from './account.actions';
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs';
import { JwtTokenModel } from 'src/app/models/jwt-token.model';
import { SignUpModel } from 'src/app/models/sign-up.model';
import { ResetPasswordModel } from 'src/app/models/reset-password';

@Injectable()
export class AccountEffects {

    signIn$ = createEffect(() => this.actions$.pipe(
        ofType(signIn),
        switchMap(action =>
            this.accountService.signIn(
                action.signInModel
            ).pipe(
                map((signInSuccessData: JwtTokenModel) => ({
                    type: AccountActions.SignInSuccess,
                    signInData: signInSuccessData,
                })),
                catchError(
                    error => {
                        return of(signInFailure({
                            serverError: error
                        }))
                    }
                )
            ))
    ));

    signOut$ = createEffect(() => this.actions$.pipe(
        ofType(signOut),
        switchMap(() => this.accountService.signOut()
            .pipe(
                map(() => ({
                    type: AccountActions.SignOutSuccess,
                })),
                catchError(
                    error => {
                        debugger;
                        return of(signOutFailure({
                            serverError: error
                        }))
                    }
                )
            ))
    ));

    signUp$ = createEffect(() => this.actions$.pipe(
        ofType(signUp),
        switchMap(action =>
            this.accountService.signUp(
                action.signUpModel
            ).pipe(
                map((signUpModel: SignUpModel) => ({
                    type: AccountActions.SignUpSuccess,
                    payload: signUpModel,
                })),
                catchError(
                    error => {
                        debugger
                        return of(signUpFailure({
                            serverError: error
                        }))
                    }
                )
            ))
    ));

    forgotPassword$ = createEffect(() => this.actions$.pipe(
        ofType(forgotPassword),
        switchMap(action =>
            this.accountService.forgotPassword(
                action.payload
            ).pipe(
                map((email: string) => ({
                    type: AccountActions.ForgotPasswordSuccess,
                    payload: email,
                })),
                catchError(
                    error => {
                        debugger
                        return of(forgotPasswordFailure({
                            serverError: error
                        }))
                    }
                )
            ))
    ));

    resetPassword$ = createEffect(() => this.actions$.pipe(
        ofType(resetPassword),
        switchMap(action =>
            this.accountService.resetPassword(
                action.resetPasswordModel
            ).pipe(
                map((resetPasswordModel: ResetPasswordModel) => ({
                    type: AccountActions.ResestPasswordSuccess,
                    resetPasswordModel: resetPasswordModel,
                })),
                catchError(
                    error => {
                        debugger
                        return of(resetPasswordFailure({
                            serverError: error
                        }))
                    }
                )
            ))
    ));

    constructor(
        private actions$: Actions,
        private accountService: AccountService
    ) { }

}