import { Action, createReducer, on } from '@ngrx/store';
import { AppState, initialAppState } from 'src/app/store/state/app.state';
import * as AccountActions from './account.actions';

export const ACCOUNT_FEATURE_NAME = 'accountReducer';

const createAccauntReducer = createReducer(
    initialAppState,
    // SignIn block
    on(AccountActions.signIn, state => ({
        ...state,
        loading: true
    })),
    on(AccountActions.signInSuccess, (state, { signInData }) => ({
        ...state,
        signInData: signInData,
        loading: false,
        isLoggedIn: true
    })),
    on(AccountActions.signInFailure, (state, { serverError }) => {
        debugger
        return ({
            ...state,
            loading: false,
            isLoggedIn: false,
            serverError: serverError
        })
    }),
    // SignOut block    
    on(AccountActions.signOut, state => ({
        ...state,
        loading: true
    })),
    on(AccountActions.signOutSuccess, (state) => ({
        ...state,
        loading: false,
        isLoggedIn: false
    })),
    on(AccountActions.signOutFailure, (state, { serverError }) => {
        return ({
            ...state,
            loading: false,
            isLoggedIn: true,
            serverError: serverError
        })
    }),
    // SignUp block
    on(AccountActions.signUp, state => ({
        ...state,
        loading: true
    })),
    on(AccountActions.signUpSuccess, (state, { payload }) => ({
        ...state,
        payload: payload,
        signUpState: {
            ...state.signUpState,
            isSignedUp: true
        },
        loading: false,

    })),
    on(AccountActions.signUpFailure, (state, { serverError }) => {
        debugger
        return ({
            ...state,
            loading: false,
            serverError: serverError,
            signUpState: {
                ...state.signUpState,
                isSignedUp: false
            },
        })
    }),
    // ForgotPassword block
    on(AccountActions.forgotPassword, state => ({
        ...state,
        loading: true
    })),
    on(AccountActions.forgotPasswordSuccess, (state) => ({
        ...state,
        loading: false,
        forgotPasswordState: {
            ...state.forgotPasswordState,
            isEmailExist: true
        }
    })),
    on(AccountActions.forgotPasswordFailure, (state, { serverError }) => {
        return ({
            ...state,
            loading: false,
            serverError: serverError,
            forgotPasswordState: {
                ...state.forgotPasswordState,
                isEmailExist: false
            }
        })
    }),
);

export function accountReducer(state: AppState | undefined, action: Action) {
    return createAccauntReducer(state, action);
}

// const _loginReducer = createReducer(
//     initialState,
//     on(login, state => ({
//         ...state,
//         loading: true
//     })),
//     on(loginSuccess, (state, loginData: LoginData) => ({
//         ...state,
//         loginData,
//         loaded: true,
//         loading: false,
//         serverError: []
//     })),
//     on(loginFailure, (state, { serverError }) => {
//         debugger
//         return ({
//             ...state,
//             loaded: true,
//             loading: false,
//             serverError: serverError
//         })
//     })
// );