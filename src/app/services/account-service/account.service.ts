import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtTokenModel } from 'src/app/models/jwt-token.model';
import { ResetPasswordModel } from 'src/app/models/reset-password';
import { SignInModel } from 'src/app/models/sign-in.model';
import { SignUpModel } from 'src/app/models/sign-up.model';
import { environment } from 'src/environments/environment';

enum ApiAuthRoutes {
  SignIn = 'api/account/login',
  SignOut = 'api/account/logout',
  SignUp = 'api/account/registeruser',
  ForgotPassword = 'api/account/forgotpassword',
  ResetPassword = 'api/account/resetpassword'
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

  forgotPassword(email: string) {
    return this.http.post(this.myApiUrl + ApiAuthRoutes.ForgotPassword, email);
  }

  resetPassword(resetPasswordModel: ResetPasswordModel) {
    return this.http.post(this.myApiUrl + ApiAuthRoutes.ResetPassword, resetPasswordModel);
  }
}

