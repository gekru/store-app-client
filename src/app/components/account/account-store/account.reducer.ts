import { Action, createReducer, on } from '@ngrx/store';
import { signIn, signInSuccess, signInFailure } from './account.actions';
import { initialSignInState, SignInState } from './account.state';

export const SIGNIN_FEATURE_NAME = 'signInReducer';

const createSignInReducer = createReducer(
    initialSignInState,
    on(signIn, state => ({
        ...state,
        loading: true
    })),
    on(signInSuccess, (state, { signInData }) => ({
        ...state,
        signInData: signInData,
        loaded: true,
        loading: false,
        isLoggedIn: true
    })),
    on(signInFailure, (state, { serverError }) => {
        debugger
        return ({
            ...state,
            loaded: true,
            loading: false,
            isLoggedIn: false,
            serverError: serverError
        })
    })
);

export function signInReducer(state: SignInState | undefined, action: Action) {
    return createSignInReducer(state, action);
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