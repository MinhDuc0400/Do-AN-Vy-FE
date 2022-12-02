import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../common/services/data.service';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  id: number;
  bienSoXe: string;
  vao: Date;
  ra?: Date;
  tongThoiGianGui?: number;
  tongTien?: string;
  mediaLink: string;
  thoiGianThanhToan?: Date;
}

@Component({
  selector: 'ngx-in-out-list',
  templateUrl: './in-out-list.component.html',
  styleUrls: ['./in-out-list.component.scss'],
})


export class InOutListComponent implements OnInit {
  columns: string[] = ['bienSoXe', 'vao', 'ra', 'tongThoiGianGui', 'tongTien'];
  dataSource;
  constructor(
    private router: Router,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.dataService.getListData().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
    });
  }

  viewDetail(item) {
    this.router.navigate(['./pages/in-out-list/' + item._id]);
  }

}
