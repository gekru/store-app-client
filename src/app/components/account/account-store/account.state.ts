import { JwtTokenModel } from 'src/app/models/jwt-token.model';
import { SignUpModel } from 'src/app/models/sign-up.model';

export interface SignInState {
    signInData?: JwtTokenModel;
};

export const initialSignInState: SignInState = {
};

export interface SignUpState {
    isSignedUp: boolean;
    signUpModel: SignUpModel;
};

export const initialSignUpState: SignUpState = {
    isSignedUp: false,
    signUpModel: null
};

export interface ForgotPasswordState {
    email: string;
    isEmailExist: boolean;
};

export const initialForgotPasswordState: ForgotPasswordState = {
    email: null,
    isEmailExist: false,
};