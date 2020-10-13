import * as AccountState from 'src/app/components/account/account-store/account.state';

export interface AppState {
    loading: boolean;
    serverError: Error;
    isLoggedIn: boolean;
    signInState: AccountState.SignInState;
    signUpState: AccountState.SignUpState;
    forgotPasswordState: AccountState.ForgotPasswordState;
    resetPasswordState: AccountState.ResetPasswordState;
};

export const initialAppState: AppState = {
    loading: false,
    isLoggedIn: false,
    serverError: null,
    signInState: AccountState.initialSignInState,
    signUpState: AccountState.initialSignUpState,
    forgotPasswordState: AccountState.initialForgotPasswordState,
    resetPasswordState: AccountState.initialResetPasswordState,
};
