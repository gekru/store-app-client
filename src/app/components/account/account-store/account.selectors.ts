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