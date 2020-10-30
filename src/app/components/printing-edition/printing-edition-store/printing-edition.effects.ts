import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PrintingEditionModel } from 'src/app/models/printing-edition.model';
import { PrintingEditionService } from 'src/app/services/printing-edition-service/printing-edition.service';
import { getAll, getAllFailure, getAllSuccess, getById, getByIdFailure, getByIdSuccess, PrintingEditionActions } from './printing-edition.actions';

@Injectable()
export class PrintingEditionEffects {

    getAll$ = createEffect(() => this.actions$.pipe(
        ofType(getAll),
        switchMap(() =>
            this.printingEditionService.getAll()
                .pipe(
                    map((printingEditionModel: PrintingEditionModel[]) =>
                        getAllSuccess({ printingEditionModel })),
                    catchError(
                        error => {
                            return of(getAllFailure({
                                serverError: error
                            }))
                        }
                    )
                ))
    ));

    getById$ = createEffect(() => this.actions$.pipe(
        ofType(getById),
        switchMap((action) =>
            this.printingEditionService.getById(action.id)
                .pipe(
                    map((printingEditionModel: PrintingEditionModel) => getByIdSuccess({
                        printingEditionModel: printingEditionModel
                    })),
                    catchError(
                        error => {
                            debugger;
                            return of(getByIdFailure({
                                serverError: error
                            }))
                        }
                    )
                ))
    ));

    constructor(
        private actions$: Actions,
        private printingEditionService: PrintingEditionService
    ) { }

}