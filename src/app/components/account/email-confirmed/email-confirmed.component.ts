import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppRoutes } from 'src/app/app-routing.module';

@Component({
  selector: 'app-email-confirmed',
  templateUrl: './email-confirmed.component.html',
  styleUrls: ['./email-confirmed.component.css']
})
export class EmailConfirmedComponent implements OnInit {

  firstName: string = undefined;
  lastName: string = undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(queryParams => {
      this.firstName = queryParams.get('firstName');
      this.lastName = queryParams.get('lastName');
    });
  }

  navigateToSignIn() {
    this.router.navigate([AppRoutes.SignIn])
  }
}
