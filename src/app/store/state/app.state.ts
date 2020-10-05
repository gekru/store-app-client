import { initialSignInState, SignInState, } from 'src/app/components/account/account-store/account.state';

export interface AppState {
    loading: boolean;
    serverError: string[];
    isLoggedIn: boolean;
    signInState: SignInState;
};

export const initialAppState: AppState = {
    loading: false,
    isLoggedIn: false,
    serverError: null,
    signInState: initialSignInState,
};
