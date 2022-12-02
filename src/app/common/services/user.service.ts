import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly url = environment.serverURL + '/user';
  public currentUser = new BehaviorSubject<any>(null);

  constructor(
    private apiService: ApiService,
  ) { }


  getDisplayName(firstName: string, lastName: string): string {
    return (firstName || '') + ' ' + (lastName || '');
  }

  checkUser() {
    return this.apiService.getAPI(this.url + '/profile')
      .pipe(
        tap(el => {
          if (el) {
            this.currentUser.next(el);
            localStorage.setItem('userType', el.userType);
          }
        }),
      );
  }
}
