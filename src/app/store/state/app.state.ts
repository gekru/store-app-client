import { initialSignInState, initialSignUpState, SignInState, SignUpState, } from 'src/app/components/account/account-store/account.state';

export interface AppState {
    loading: boolean;
    serverError: string[];
    isLoggedIn: boolean;
    signInState: SignInState;
    signUpState: SignUpState;
};

export const initialAppState: AppState = {
    loading: false,
    isLoggedIn: false,
    serverError: null,
    signInState: initialSignInState,
    signUpState: initialSignUpState,
};
