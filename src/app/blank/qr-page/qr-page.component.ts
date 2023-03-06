import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { NbSpinnerService } from '@nebular/theme';
import { io } from 'socket.io-client';

@Component({
  selector: 'ngx-qr-page',
  templateUrl: './qr-page.component.html',
  styleUrls: ['./qr-page.component.scss'],
})
export class QrPageComponent implements OnInit {
  public stringUrl: string;
  socket: any;
  constructor(
    private route: ActivatedRoute,
    private spinner: NbSpinnerService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.spinner.load();
    this.stringUrl = environment.domainURL + 'blank/' + this.route.snapshot.params.id;
    const idToken = localStorage.getItem('idToken');
    this.socket = io(`${environment.socketURL}?token=${idToken}`, {
      auth: {
        query: idToken,
      },
      transports: ['websocket'],
      upgrade: false,
    }).connect();
    this.socket.on('payment', data => {
      if (data && data._id && data._id === this.route.snapshot.params.id) {
        this.router.navigate(['blank']);
      }
    });
  }

}
