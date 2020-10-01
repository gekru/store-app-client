import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtTokenModel } from '../models/jwt-token.model';
import { SignInModel } from '../models/sign-in.model';

enum AuthRoutes {
  SignIn = 'api/account/login',
}

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myApiUrl = environment.apiUrl;
  }


  signIn(signInModel: SignInModel) {
    return this.http.post<JwtTokenModel>(this.myApiUrl + AuthRoutes.SignIn, signInModel)
  }
}

