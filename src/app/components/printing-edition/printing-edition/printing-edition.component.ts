import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PrintingEditionModel } from 'src/app/models/printing-edition.model';
import { getPrintingEditions } from '../printing-edition-store/printing-edition.selectors';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { getAll } from '../printing-edition-store/printing-edition.actions';
import { AppRoutes } from 'src/app/app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-printing-edition',
  templateUrl: './printing-edition.component.html',
  styleUrls: ['./printing-edition.component.css']
})
export class PrintingEditionComponent implements OnInit {
  faBook = faBook;

  printingEditions$: Observable<PrintingEditionModel[]> = this.store$.pipe(select(getPrintingEditions));

  constructor(private store$: Store, private router: Router) { }

  ngOnInit(): void {
    this.store$.dispatch(getAll());
  }

}
