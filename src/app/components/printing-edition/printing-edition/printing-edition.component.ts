import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PrintingEditionModel } from 'src/app/models/printing-edition.model';
import { PrintingEditionService } from 'src/app/services/printing-edition-service/printing-edition.service';
import { getPrintingEditions } from '../printing-edition-store/printing-edition.selectors';
import { faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-printing-edition',
  templateUrl: './printing-edition.component.html',
  styleUrls: ['./printing-edition.component.css']
})
export class PrintingEditionComponent implements OnInit {
  faBook = faBook;
  printingEditions: PrintingEditionModel[];
  printingEditions$: Observable<PrintingEditionModel[]> = this.store$.pipe(select(getPrintingEditions));

  constructor(private store$: Store, private printingEditionService: PrintingEditionService) { }

  ngOnInit(): void {
    this.printingEditionService.getAll().subscribe(printingEdition => this.printingEditions = printingEdition);
  }

}
