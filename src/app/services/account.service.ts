import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtTokenModel } from '../models/jwt-token.model';
import { SignInModel } from '../models/sign-in.model';
import { SignUpModel } from '../models/sign-up.model';

enum ApiAuthRoutes {
  SignIn = 'api/account/login',
  SignOut = 'api/account/logout',
  SignUp = 'api/account/registeruser',
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
    return this.http.post<JwtTokenModel>(this.myApiUrl + ApiAuthRoutes.SignIn, signInModel);
  }

  signOut() {
    return this.http.post(this.myApiUrl + ApiAuthRoutes.SignOut, null);
  }

  signUp(signUpModel: SignUpModel) {
    return this.http.post(this.myApiUrl + ApiAuthRoutes.SignUp, signUpModel);
  }
}

