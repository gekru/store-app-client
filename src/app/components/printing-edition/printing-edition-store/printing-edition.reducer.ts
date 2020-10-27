import { Action, createReducer, on } from '@ngrx/store';
import { AppState, initialAppState } from 'src/app/store/state/app.state';
import { getAll, getAllFailure, getAllSuccess } from './printing-edition.actions';

export const PRINTING_EDITION_FEATURE_NAME = 'printingEditionReducer';

const createPrintingEditionReducer = createReducer(
    initialAppState,
    // GetAll block
    on(getAll, state => ({
        ...state,
        loading: true
    })),
    on(getAllSuccess, (state, { printingEditionModel }) => ({
        ...state,
        printingEditionState: {
            ...state.printingEditionState,
            printingEditionData: printingEditionModel,
        },
        loading: false,
    })),
    on(getAllFailure, (state, { serverError }) => {
        return ({
            ...state,
            loading: false,
            serverError: serverError
        })
    }),


);

export function printingEditionReducer(state: AppState | undefined, action: Action) {
    return createPrintingEditionReducer(state, action);
}