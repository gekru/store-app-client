import * as AccountState from 'src/app/components/account/account-store/account.state';
import { initialPrintingEditionState, PrintingEditionState } from 'src/app/components/printing-edition/printing-edition-store/printing-edition.state';

export interface AppState {
    loading: boolean;
    serverError: Error;
    isLoggedIn: boolean;
    signInState: AccountState.SignInState;
    signUpState: AccountState.SignUpState;
    forgotPasswordState: AccountState.ForgotPasswordState;
    resetPasswordState: AccountState.ResetPasswordState;
    printingEditionState: PrintingEditionState;
};

export const initialAppState: AppState = {
    loading: false,
    isLoggedIn: false,
    serverError: null,
    signInState: AccountState.initialSignInState,
    signUpState: AccountState.initialSignUpState,
    forgotPasswordState: AccountState.initialForgotPasswordState,
    resetPasswordState: AccountState.initialResetPasswordState,
    printingEditionState: initialPrintingEditionState
};
