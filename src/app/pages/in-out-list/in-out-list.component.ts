import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    bienSoXe: '29D1-14020',
    vao: new Date(),
    ra: new Date(),
    tongThoiGianGui: 180,
    tongTien: '100000',
    mediaLink: 'https://cdnimg.vietnamplus.vn/uploaded/izhsa/2019_09_19/ttxvn_canh_sat_giao_thong_binh_duong_khang_dinh_cap_mot_bks_61a_66666_duy_nhat_162920275_4085687.jpg',
  },
  {
    id: 1,
    bienSoXe: '29D1-14020',
    vao: new Date(),
    mediaLink: 'https://cdnimg.vietnamplus.vn/uploaded/izhsa/2019_09_19/ttxvn_canh_sat_giao_thong_binh_duong_khang_dinh_cap_mot_bks_61a_66666_duy_nhat_162920275_4085687.jpg',
  },
  {
    id: 1,
    bienSoXe: '29D1-14020',
    vao: new Date(),
    mediaLink: 'https://cdnimg.vietnamplus.vn/uploaded/izhsa/2019_09_19/ttxvn_canh_sat_giao_thong_binh_duong_khang_dinh_cap_mot_bks_61a_66666_duy_nhat_162920275_4085687.jpg',
  },
  {
    id: 1,
    bienSoXe: '29D1-14020',
    vao: new Date(),
    ra: new Date(),
    tongThoiGianGui: 180,
    tongTien: '100000',
    mediaLink: 'https://cdnimg.vietnamplus.vn/uploaded/izhsa/2019_09_19/ttxvn_canh_sat_giao_thong_binh_duong_khang_dinh_cap_mot_bks_61a_66666_duy_nhat_162920275_4085687.jpg',
  },
  {
    id: 1,
    bienSoXe: '29D1-14020',
    vao: new Date(),
    ra: new Date(),
    tongThoiGianGui: 180,
    tongTien: '100000',
    mediaLink: 'https://cdnimg.vietnamplus.vn/uploaded/izhsa/2019_09_19/ttxvn_canh_sat_giao_thong_binh_duong_khang_dinh_cap_mot_bks_61a_66666_duy_nhat_162920275_4085687.jpg',
  },
  {
    id: 1,
    bienSoXe: '29D1-14020',
    vao: new Date(),
    ra: new Date(),
    tongThoiGianGui: 180,
    tongTien: '100000',
    mediaLink: 'https://cdnimg.vietnamplus.vn/uploaded/izhsa/2019_09_19/ttxvn_canh_sat_giao_thong_binh_duong_khang_dinh_cap_mot_bks_61a_66666_duy_nhat_162920275_4085687.jpg',
  },
];

@Component({
  selector: 'ngx-in-out-list',
  templateUrl: './in-out-list.component.html',
  styleUrls: ['./in-out-list.component.scss'],
})


export class InOutListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  columns: string[] = ['bienSoXe', 'vao', 'ra', 'tongThoiGianGui', 'tongTien'];
  dataSource = ELEMENT_DATA;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  viewDetail(item: PeriodicElement) {
    this.router.navigate(['./pages/in-out-list/' + item.id]);
  }

}
