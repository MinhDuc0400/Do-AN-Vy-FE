import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { LicencePlateService } from '../../common/services/licence-plate.service';

@Component({
  selector: 'ngx-pre-paid',
  templateUrl: './pre-paid.component.html',
  styleUrls: ['./pre-paid.component.scss'],
})
export class PrePaidComponent implements OnInit {
  settings = {
    mode: 'inline',
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      licencePlate: {
        title: 'Vehicle Code',
        type: 'string',
      },
      amount: {
        title: 'Balance',
        type: 'number',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  constructor(
    private licencePlateService: LicencePlateService,
  ) { }

  ngOnInit(): void {
    this.licencePlateService.getLicencePlates().subscribe(res => {
      if (res) {
        this.source.load(res);
      }
    });
  }

  onCreateConfirm(event) {
    this.licencePlateService.createLicencePlate(event.newData.licencePlate, +event.newData.amount).subscribe();
  }

  onEditConfirm(event) {
    this.licencePlateService.updateLicencePlate(event.data._id, +event.newData.amount).subscribe();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      this.licencePlateService.deleteLicencePlate(event.data._id).subscribe();
    } else {
      event.confirm.reject();
    }
  }

}
