import { PrintingEditionModel } from 'src/app/models/printing-edition.model';

export interface PrintingEditionState {
    printingEditionData: PrintingEditionModel[];
    selectedPrintingEdition: PrintingEditionModel;
};

export const initialPrintingEditionState: PrintingEditionState = {
    printingEditionData: undefined,
    selectedPrintingEdition: undefined,
};