import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ConstantNames } from 'src/app/constants/constant-names';
import { PrintingEditionModel } from 'src/app/models/printing-edition.model';
import { getById } from '../printing-edition-store/printing-edition.actions';
import { getPrintingEditionDetail } from '../printing-edition-store/printing-edition.selectors';

@Component({
  selector: 'app-printing-edition-detail',
  templateUrl: './printing-edition-detail.component.html',
  styleUrls: ['./printing-edition-detail.component.css']
})
export class PrintingEditionDetailComponent implements OnInit {

  printingEdition$: Observable<PrintingEditionModel> = this.store$.pipe(select(getPrintingEditionDetail));

  constructor(private route: ActivatedRoute,
    private store$: Store<{ printingEdition: PrintingEditionModel }>
  ) { }

  ngOnInit(): void {
    this.getPrintingEdition();
  }

  getPrintingEdition() {
    const id: number = +this.route.snapshot.paramMap.get(ConstantNames.id);
    this.store$.dispatch(getById({ id: id }));
  }

}
