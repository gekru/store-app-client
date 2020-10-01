import { createAction, props } from '@ngrx/store';
import { JwtTokenModel } from 'src/app/models/jwt-token.model';
import { SignInModel } from 'src/app/models/sign-in.model';

export enum AccountActions {
    SignIn = '[Account] SignIn',
    SignInSuccess = '[Account] SignIn Success',
    SignInFailure = '[Account] SignIn Failure'
}

export const signIn = createAction(
    AccountActions.SignIn,
    props<{ signInModel: SignInModel }>()
);

export const signInSuccess = createAction(
    AccountActions.SignInSuccess,
    props<{ signInData: JwtTokenModel }>()
);

export const signInFailure = createAction(
    AccountActions.SignInFailure,
    props<{ serverError: string[] }>()
);