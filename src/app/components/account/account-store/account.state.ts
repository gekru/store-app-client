import { JwtTokenModel } from 'src/app/models/jwt-token.model';

export interface SignInState {
    signInData?: JwtTokenModel;
};

export const initialSignInState: SignInState = {
};