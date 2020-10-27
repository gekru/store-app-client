import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintingEditionComponent } from 'src/app/components/printing-edition/printing-edition/printing-edition.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { printingEditionReducer, PRINTING_EDITION_FEATURE_NAME } from 'src/app/components/printing-edition/printing-edition-store/printing-edition.reducer';
import { PrintingEditionEffects } from 'src/app/components/printing-edition/printing-edition-store/printing-edition.effects';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PrintingEditionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    StoreModule.forFeature(PRINTING_EDITION_FEATURE_NAME, printingEditionReducer),
    EffectsModule.forFeature([PrintingEditionEffects])
  ]
})
export class PrintingEditionModule { }
