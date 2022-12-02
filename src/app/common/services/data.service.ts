import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = environment.serverURL + '/data';
  constructor(
    private apiService: ApiService,
  ) { }

  getListData() {
    return this.apiService.getAPI<any[]>(this.url);
  }
}
