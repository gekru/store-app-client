import { JwtTokenModel } from 'src/app/models/jwt-token.model';

export interface SignInState {
    loading: boolean;
    loaded: boolean;
    serverError: string[];
    isLoggedIn: boolean;
    signInData?: JwtTokenModel;
};

export const initialSignInState: SignInState = {
    loading: false,
    loaded: false,
    isLoggedIn: false,
    serverError: null
};