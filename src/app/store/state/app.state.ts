import * as AccountState from 'src/app/components/account/account-store/account.state';

export interface AppState {
    loading: boolean;
    serverError: string[];
    isLoggedIn: boolean;
    signInState: AccountState.SignInState;
    signUpState: AccountState.SignUpState;
    forgotPasswordState: AccountState.ForgotPasswordState;
};

export const initialAppState: AppState = {
    loading: false,
    isLoggedIn: false,
    serverError: null,
    signInState: AccountState.initialSignInState,
    signUpState: AccountState.initialSignUpState,
    forgotPasswordState: AccountState.initialForgotPasswordState,
};
