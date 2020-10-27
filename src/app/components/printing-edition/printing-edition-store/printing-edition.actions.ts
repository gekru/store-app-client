import { createAction, props } from '@ngrx/store';
import { PrintingEditionModel } from 'src/app/models/printing-edition.model';

export enum PrintingEditionActions {
    GetAll = '[Account] GetAll',
    GetAllSuccess = '[Account] GetAll Success',
    GetAllFailure = '[Account] GetAll Failure',
}

// GetAll block
export const getAll = createAction(
    PrintingEditionActions.GetAll,
    props<{ printingEditionModel: PrintingEditionModel[] }>()
);

export const getAllSuccess = createAction(
    PrintingEditionActions.GetAllSuccess,
    props<{ printingEditionModel: PrintingEditionModel[] }>()
);

export const getAllFailure = createAction(
    PrintingEditionActions.GetAllFailure,
    props<{ serverError: Error }>()
);
