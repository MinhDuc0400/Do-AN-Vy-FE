/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  serverURL: 'https://01b6-171-241-50-107.ap.ngrok.io/api/v1', // local
  socketURL: 'wss://648b-171-241-50-107.ap.ngrok.io/', // local
  domainURL: 'https://do-an-vy-fe.web.app/',
  firebaseConfig: {
    apiKey: 'AIzaSyA-5IRQGWEJLblqImYz_2s9Jw16-LXOA50',
    authDomain: 'doan-eed4a.firebaseapp.com',
    projectId: 'doan-eed4a',
    storageBucket: 'doan-eed4a.appspot.com',
    messagingSenderId: '1042186111084',
    appId: '1:1042186111084:web:2b8f4933554da7b588b049',
    measurementId: 'G-MLBYNTJ2FR',
  },
};
