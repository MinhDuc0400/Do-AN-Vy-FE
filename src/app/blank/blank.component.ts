import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NbSpinnerService } from '@nebular/theme';
import { io } from 'socket.io-client';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { SpeechService } from '../common/services/speech.service';

@Component({
  selector: 'ngx-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss'],
})
export class BlankComponent implements OnInit {
  @ViewChild('audioTag') audioTag: ElementRef;
  socket: any;
  audioSource = '';

  constructor(
    private spinner: NbSpinnerService,
    private router: Router,
    private speechService: SpeechService,

  ) { }

  ngOnInit(): void {
    this.spinner.load();
    const idToken = localStorage.getItem('idToken');
    this.socket = io(`${environment.socketURL}?token=${idToken}`, {
      auth: {
        query: idToken,
      },
      transports: ['websocket'],
      upgrade: false,
    }).connect();
    this.socket.on('data.out', data => {
      if (data && data._id) {
        this.goToQr(data._id);
      }
    });
    this.socket.on('error', res => {
      if (res && res.audioContent) {
        this.loadAudio(res.audioContent);
      }
    });
  }

  goToQr(id: string) {
    this.router.navigate(['blank/qr/' + id]);
  }

  getTexttoAudio(text: string) {
    this.speechService.getBase64(text)
      .subscribe(res => {
        if (res && res.audioContent) {
          this.loadAudio(res.audioContent);
        }
      });
  }

  loadAudio(dataURI: string) {
    const binary = this.convertDataURIToBinary('data:audio/ogg;base64,' + dataURI);
    const blob = new Blob([binary], {type : 'audio/ogg'});
    const blobUrl = URL.createObjectURL(blob);
    this.audioSource = blobUrl;
  }

  convertDataURIToBinary(dataURI) {
    const BASE64_MARKER = ';base64,';
    const base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    const base64 = dataURI.substring(base64Index);
    const raw = window.atob(base64);
    const rawLength = raw.length;
    const array = new Uint8Array(new ArrayBuffer(rawLength));

    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }



}
