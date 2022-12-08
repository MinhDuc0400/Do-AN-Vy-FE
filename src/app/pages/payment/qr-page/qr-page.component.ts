import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'ngx-qr-page',
  templateUrl: './qr-page.component.html',
  styleUrls: ['./qr-page.component.scss'],
})
export class QrPageComponent implements OnInit {
  public stringUrl: string;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.stringUrl = environment.domainURL + 'pages/payment/' + this.route.snapshot.params.id;
  }

  open() {

  }

}
