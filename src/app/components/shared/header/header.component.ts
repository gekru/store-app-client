import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppRoutes } from 'src/app/app-routing.module';
import { signOut } from '../../account/account-store/account.actions';
import { isLoggedIn } from '../../account/account-store/account.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<any> = this.store$.pipe(select(isLoggedIn));

  constructor(private store$: Store, private router: Router) {
  }

  ngOnInit(): void {
  }


  hideIcons(): boolean {
    if (this.router.url === '/' + AppRoutes.SignIn) {
      return true;
    }
    return false;
  }

  signOut() {
    this.store$.dispatch(signOut());
  }
}
