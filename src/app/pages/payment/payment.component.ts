import { Component, OnInit } from '@angular/core';
import { DataService } from '../../common/services/data.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'ngx-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  columns: string[] = ['bienSoXe', 'vao', 'ra', 'tongThoiGianGui', 'tongTien', 'thoiGianThanhToan'];
  dataSource;

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.dataService.getListDataPayment().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
    });
  }

}
