import { createAction, props } from '@ngrx/store';
import { JwtTokenModel } from 'src/app/models/jwt-token.model';
import { SignInModel } from 'src/app/models/sign-in.model';
import { SignUpModel } from 'src/app/models/sign-up.model';

export enum AccountActions {
    SignIn = '[Account] SignIn',
    SignInSuccess = '[Account] SignIn Success',
    SignInFailure = '[Account] SignIn Failure',
    SignOut = '[Account] SignOut',
    SignOutSuccess = '[Account] SignOut Success',
    SignOutFailure = '[Account] SignOut Failure',
    SignUp = '[Account] SignUp',
    SignUpSuccess = '[Account] SignUp Success',
    SignUpFailure = '[Account] SignUp Failure',
}

// SignIn block
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

// SignOut block
export const signOut = createAction(
    AccountActions.SignOut
);

export const signOutSuccess = createAction(
    AccountActions.SignOutSuccess
);

export const signOutFailure = createAction(
    AccountActions.SignOutFailure,
    props<{ serverError: string[] }>()
);

// SignUp block
export const signUp = createAction(
    AccountActions.SignUp,
    props<{ signUpModel: SignUpModel }>()
);

export const signUpSuccess = createAction(
    AccountActions.SignUpSuccess,
    props<{ payload: SignUpModel }>()
);

export const signUpFailure = createAction(
    AccountActions.SignUpFailure,
    props<{ serverError: string[] }>()
);