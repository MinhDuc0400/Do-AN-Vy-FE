import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class LicencePlateService {
  private readonly url = environment.serverURL + '/admin/licence-plate';

  constructor(
    private apiService: ApiService,
  ) { }

  getLicencePlates() {
    return this.apiService.getAPI(this.url + '/search');
  }

  createLicencePlate(licencePlate: string, amount: number) {
    return this.apiService.postAPI(this.url + '/create', {
      licencePlate,
      amount,
    });
  }

  updateLicencePlate(licencePlateId: string, amount: number) {
    return this.apiService.patchAPI(this.url + '/update', {
      id: licencePlateId,
      amount,
    });
  }

  deleteLicencePlate(licencePlateId: string) {
    return this.apiService.deleteAPI(this.url + '?id=' + licencePlateId);
  }
}
