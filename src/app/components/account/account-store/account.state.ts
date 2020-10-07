import { JwtTokenModel } from 'src/app/models/jwt-token.model';
import { SignUpModel } from 'src/app/models/sign-up.model';

export interface SignInState {
    signInData?: JwtTokenModel;
};

export const initialSignInState: SignInState = {
};

export interface SignUpState {
    signUpModel: SignUpModel;
};

export const initialSignUpState: SignUpState = {
    signUpModel: null
};