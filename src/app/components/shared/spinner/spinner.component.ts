import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getLoading } from '../../account/account-store/account.selectors';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  accountLoading$: Observable<boolean> = this.store$.pipe(select(getLoading));
  
  constructor(private store$: Store) { }

  ngOnInit(): void {
  }
}
