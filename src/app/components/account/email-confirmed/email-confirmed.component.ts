import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppRoutes } from 'src/app/app-routing.module';
import { ConstantNames } from 'src/app/constants/constant-names';

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
      this.firstName = queryParams.get(ConstantNames.firstName);
      this.lastName = queryParams.get(ConstantNames.lastName);
    });
  }

  navigateToSignIn() {
    this.router.navigate([AppRoutes.SignIn])
  }
}
