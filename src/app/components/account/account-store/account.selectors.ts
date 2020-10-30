import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { ACCOUNT_FEATURE_NAME } from './account.reducer';

const getFeature = createFeatureSelector<AppState>(ACCOUNT_FEATURE_NAME);

export const getLoading = createSelector(
    getFeature,
    state => state.loading
);

export const getServerError = createSelector(
    getFeature,
    state => state.serverError
);

export const getSignInData = createSelector(
    getFeature,
    state => state.signInState.signInData
);

export const getAccessToken = createSelector(
    getSignInData,
    signInData => signInData && signInData.accessToken
);

export const isLoggedIn = createSelector(
    // getAccessToken,
    // accessToken => !!accessToken
    getFeature,
    state => state.isLoggedIn
);

export const isSignedUp = createSelector(
    getFeature,
    state => state.signUpState.isSignedUp
);

export const isEmailExist = createSelector(
    getFeature,
    state => state.forgotPasswordState.isEmailExist
);

export const isPasswordRecovered = createSelector(
    getFeature,
    state => state.resetPasswordState.isPasswordRecovered
);
// export const getFirstName = createSelector(
//     getFeature,
//     state => state.signUpState.signUpModel.firstName
// );
