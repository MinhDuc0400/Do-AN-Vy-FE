import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DoorService {
  private readonly url = environment.serverURL + '/door';

  constructor(
    private apiService: ApiService,
  ) { }
  controlInDoor(status: string) {
    return this.apiService.getAPI(this.url + '/control-in-door?status=' + status);
  }

  controlOutDoor(status: string) {
    return this.apiService.getAPI(this.url + '/control-out-door?status=' + status);
  }
}
