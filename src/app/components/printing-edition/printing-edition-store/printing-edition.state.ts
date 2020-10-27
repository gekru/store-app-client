import { PrintingEditionModel } from 'src/app/models/printing-edition.model';

export interface PrintingEditionState {
    printingEditionData: PrintingEditionModel[];
};

export const initialPrintingEditionState: PrintingEditionState = {
    printingEditionData: null
};