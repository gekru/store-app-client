import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { PRINTING_EDITION_FEATURE_NAME } from './printing-edition.reducer';

const getFeature = createFeatureSelector<AppState>(PRINTING_EDITION_FEATURE_NAME);

export const getPrintingEditions = createSelector(
    getFeature,
    state => state.printingEditionState.printingEditionData
);

export const getPrintingEditionDetail = createSelector(
    getFeature,
    state => state.printingEditionState.selectedPrintingEdition
);