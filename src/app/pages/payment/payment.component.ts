import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../in-out-list/in-out-list.component';

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    bienSoXe: '29D1-14020',
    vao: new Date(),
    ra: new Date(),
    tongThoiGianGui: 180,
    tongTien: '100000',
    mediaLink: 'https://cdnimg.vietnamplus.vn/uploaded/izhsa/2019_09_19/ttxvn_canh_sat_giao_thong_binh_duong_khang_dinh_cap_mot_bks_61a_66666_duy_nhat_162920275_4085687.jpg',
    thoiGianThanhToan: new Date(),
  },
  {
    id: 1,
    bienSoXe: '29D1-14020',
    vao: new Date(),
    ra: new Date(),
    tongThoiGianGui: 180,
    tongTien: '100000',
    mediaLink: 'https://cdnimg.vietnamplus.vn/uploaded/izhsa/2019_09_19/ttxvn_canh_sat_giao_thong_binh_duong_khang_dinh_cap_mot_bks_61a_66666_duy_nhat_162920275_4085687.jpg',
    thoiGianThanhToan: new Date(),

  },
  {
    id: 1,
    bienSoXe: '29D1-14020',
    vao: new Date(),
    ra: new Date(),
    tongThoiGianGui: 180,
    tongTien: '100000',
    mediaLink: 'https://cdnimg.vietnamplus.vn/uploaded/izhsa/2019_09_19/ttxvn_canh_sat_giao_thong_binh_duong_khang_dinh_cap_mot_bks_61a_66666_duy_nhat_162920275_4085687.jpg',
    thoiGianThanhToan: new Date(),

  },
  {
    id: 1,
    bienSoXe: '29D1-14020',
    vao: new Date(),
    ra: new Date(),
    tongThoiGianGui: 180,
    tongTien: '100000',
    mediaLink: 'https://cdnimg.vietnamplus.vn/uploaded/izhsa/2019_09_19/ttxvn_canh_sat_giao_thong_binh_duong_khang_dinh_cap_mot_bks_61a_66666_duy_nhat_162920275_4085687.jpg',
    thoiGianThanhToan: new Date(),

  },
  {
    id: 1,
    bienSoXe: '29D1-14020',
    vao: new Date(),
    ra: new Date(),
    tongThoiGianGui: 180,
    tongTien: '100000',
    mediaLink: 'https://cdnimg.vietnamplus.vn/uploaded/izhsa/2019_09_19/ttxvn_canh_sat_giao_thong_binh_duong_khang_dinh_cap_mot_bks_61a_66666_duy_nhat_162920275_4085687.jpg',
    thoiGianThanhToan: new Date(),

  },
  {
    id: 1,
    bienSoXe: '29D1-14020',
    vao: new Date(),
    ra: new Date(),
    tongThoiGianGui: 180,
    tongTien: '100000',
    mediaLink: 'https://cdnimg.vietnamplus.vn/uploaded/izhsa/2019_09_19/ttxvn_canh_sat_giao_thong_binh_duong_khang_dinh_cap_mot_bks_61a_66666_duy_nhat_162920275_4085687.jpg',
    thoiGianThanhToan: new Date(),

  },
];


@Component({
  selector: 'ngx-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  columns: string[] = ['bienSoXe', 'vao', 'ra', 'tongThoiGianGui', 'tongTien', 'thoiGianThanhToan'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
