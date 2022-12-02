import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-qr-page',
  templateUrl: './qr-page.component.html',
  styleUrls: ['./qr-page.component.scss'],
})
export class QrPageComponent implements OnInit {
  public itemId: string;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.itemId = this.route.snapshot.params.id;
  }

  open() {

  }

}
