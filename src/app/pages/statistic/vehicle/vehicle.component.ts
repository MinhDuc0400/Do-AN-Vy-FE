import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { NbColorHelper } from "@nebular/theme";

@Component({
  selector: 'ngx-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit {
  filterForm: FormGroup;
  data: any;
  options: any;
  constructor() { }

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      search: new FormControl(''),
      status: new FormControl(''),
      dateType: new FormControl('in'),
      timeStart: new FormControl(null),
      timeEnd: new FormControl(null),
      },
    );

    this.data = {
      labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
      datasets: [{
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        backgroundColor: NbColorHelper.hexToRgbA('#3366FF', 0.8),
      }, {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        backgroundColor: NbColorHelper.hexToRgbA('#3366FF', 0.8),
      }],
    };

    this.options = {
      maintainAspectRatio: true,
      responsive: true,
      legend: {
        labels: {
          fontColor: '#3366FF',
        },
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
              color: '#3366FF',
            },
            ticks: {
              fontColor: '#3366FF',
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: '#3366FF',
            },
            ticks: {
              fontColor: '#3366FF',
            },
          },
        ],
      },
    };
  }

}
