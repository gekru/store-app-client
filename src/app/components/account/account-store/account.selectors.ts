import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SIGNIN_FEATURE_NAME } from './account.reducer';
import { SignInState } from './account.state';

const getFeature = createFeatureSelector<SignInState>(SIGNIN_FEATURE_NAME);

export const getLoading = createSelector(
    getFeature,
    state => state.loading
);

export const getLoaded = createSelector(
    getFeature,
    state => state.loaded
);

export const getServerError = createSelector(
    getFeature,
    state => state.serverError
);

export const getSignInData = createSelector(
    getFeature,
    state => state.signInData
);

// export const getAccessToken = createSelector(
//     getLoginData,
//     loginData => loginData && loginData.accessToken
// );

export const isLoggedIn = createSelector(
    // getAccessToken,
    // accessToken => !!accessToken
    getFeature,
    state => state.isLoggedIn
);