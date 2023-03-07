import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpeechService {
  private baseUrl = environment.googleSpeechUrl + environment.googleSpeechKey;
  constructor(
    private apiService: ApiService,
  ) { }

  getBase64(text: string) {
    return this.apiService.postSpeechAPI(this.baseUrl, {
      audioConfig: {
        audioEncoding: 'LINEAR16',
        effectsProfileId: [
          'small-bluetooth-speaker-class-device',
        ],
        pitch: 0,
        speakingRate: 1,
      },
      input: {
        text: text,
      },
      voice: {
        languageCode: 'vi-VN',
        name: 'vi-VN-Wavenet-A',
      },
    });
  }
}
