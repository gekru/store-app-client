import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AccountService } from 'src/app/services/account.service';
import { signIn, signInFailure, AccountActions } from './account.actions';
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs';
import { JwtTokenModel } from 'src/app/models/jwt-token.model';


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
                        debugger
                        return of(signInFailure({
                            serverError: [error.message, error.error]
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