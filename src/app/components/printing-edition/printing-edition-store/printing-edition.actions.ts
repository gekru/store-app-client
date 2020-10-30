import { createAction, props } from '@ngrx/store';
import { PrintingEditionModel } from 'src/app/models/printing-edition.model';

export enum PrintingEditionActions {
    GetAll = '[Printing Edition] GetAll',
    GetAllSuccess = '[Printing Edition] GetAll Success',
    GetAllFailure = '[Printing Edition] GetAll Failure',
    GetById = '[Printing Edition] GetById',
    GetByIdSuccess = '[Printing Edition] GetById Success',
    GetByIdFailure = '[Printing Edition] GetById Failure',
}

// GetAll block
export const getAll = createAction(
    PrintingEditionActions.GetAll,
);

export const getAllSuccess = createAction(
    PrintingEditionActions.GetAllSuccess,
    props<{ printingEditionModel: PrintingEditionModel[] }>()
);

export const getAllFailure = createAction(
    PrintingEditionActions.GetAllFailure,
    props<{ serverError: Error }>()
);

// GetById block
export const getById = createAction(
    PrintingEditionActions.GetById,
    props<{ id: number }>()
);

export const getByIdSuccess = createAction(
    PrintingEditionActions.GetByIdSuccess,
    props<{ printingEditionModel: PrintingEditionModel }>()
);

export const getByIdFailure = createAction(
    PrintingEditionActions.GetByIdFailure,
    props<{ serverError: Error }>()
);

