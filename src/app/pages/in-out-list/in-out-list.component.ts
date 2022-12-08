import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../common/services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormControl, FormGroup } from '@angular/forms';

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
  columns: string[] = ['bienSoXe', 'vao', 'ra', 'tongThoiGianGui'];
  dataSource;

  filterForm: FormGroup;

  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private router: Router,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      search: new FormControl(''),
      status: new FormControl(''),
      dateType: new FormControl('in'),
      timeStart: new FormControl(null),
      timeEnd: new FormControl(null),
      },
    );
    this.dataService.getListData().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
    });

    this.filterForm.valueChanges.subscribe(filter => {
      this.dataService.getListData(
        filter.search,
        filter.status,
        filter.dateType,
        filter.timeStart ? new Date(filter.timeStart).toISOString() : '',
        filter.timeEnd ? new Date(filter.timeEnd).toISOString() : '',
      ).subscribe(res => {
        this.dataSource = new MatTableDataSource(res);
      });
    });
  }

  viewDetail(item) {
    this.router.navigate(['./pages/in-out-list/' + item._id]);
  }

}
