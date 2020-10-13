import { JwtTokenModel } from 'src/app/models/jwt-token.model';
import { ResetPasswordModel } from 'src/app/models/reset-password';
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

export interface ResetPasswordState {
    isPasswordRecovered: boolean;
    resetPasswordModel: ResetPasswordModel;
};

export const initialResetPasswordState: ResetPasswordState = {
    isPasswordRecovered: false,
    resetPasswordModel: null,
};