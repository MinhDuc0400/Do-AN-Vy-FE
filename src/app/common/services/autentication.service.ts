import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../../../../do-an/ngx-admin/src/app/common/interfaces/user';
import { GoogleAuthProvider } from 'firebase/auth';
import { environment } from '../../../../../../do-an/ngx-admin/src/environments/environment';
import { ApiService } from './api.service';
import { UserTypeEnum } from '../../../../../../do-an/ngx-admin/src/app/common/enum/userType.enum';
import { RegisterRequest, RegisterResponse } from '../../../../../../do-an/ngx-admin/src/app/common/interfaces/auth';
import { URL_LOGIN } from '../../../../../../do-an/ngx-admin/src/app/common/constants/url.constant';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  public user: User;

  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth,
    private apiService: ApiService,
    // private userService: UserService,
  ) {

    const currentUser = localStorage.getItem('user');
    if (currentUser) {
      try {
        this.user = JSON.parse(currentUser) as User;
      } catch (e) {
        // console.log('Error get current user from storage', e)
      }
    }
    this.angularFireAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  updateLocalUser(): void {
    localStorage.setItem('user', JSON.stringify(this.user));
    // this.userService.checkUser().subscribe();
  }

  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  AuthLogin(provider) {
    return this.angularFireAuth
      .signInWithPopup(provider)
      .then((result) => {
      })
      .catch((error) => {
      });
  }

  // OAuthProvider(provider) {
  //   return this.angularFireAuth.signInWithPopup(provider)
  //     .then((res) => {
  //       this.ngZone.run(() => {
  //         this.router.navigate(['dashboard']);
  //       });
  //     }).catch((error) => {
  //       window.alert(error);
  //     });
  // }
  //
  // SigninWithGoogle() {
  //   return this.OAuthProvider(new auth.GoogleAuthProvider())
  //     .then(res => {
  //       console.log('Successfully logged in!');
  //     }).catch(error => {
  //       console.log(error);
  //     });
  // }
  //
  // SignOut() {
  //   return this.afAuth.signOut().then(() => {
  //     this.router.navigate(['login']);
  //   });
  // }

  login(
    email: string,
    password: string,
  ) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  signup(
    email: string,
    password: string,
    passwordConfirm: string,
    firstName: string,
    lastName: string,
    userType: UserTypeEnum,
  ) {
    const url = `${environment.serverURL}${environment.user}/signup`;
    const body = {
      email,
      password,
      passwordConfirm,
      firstName,
      lastName,
      userType,
    };
    return this.apiService.postAPI<RegisterResponse, RegisterRequest>(url, body);
  }

  isLoggedIn(): boolean {
    return !!this.user;
  }

  resetAuth(): void {
    localStorage.removeItem('idToken');
    delete this.user;
  }

  logout(): void {
    localStorage.clear();

    this.user = undefined;
    this.router.navigate([URL_LOGIN]);

  }
}
