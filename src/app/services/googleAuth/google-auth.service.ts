// import { Injectable, signal } from '@angular/core';

// @Injectable({ providedIn: 'root' })
// export class GoogleAuthService {
//   private readonly _credential =
//     signal<google.accounts.id.CredentialResponse | null>(null);
//   readonly credential = this._credential.asReadonly();

//   private readonly clientId = '217032169595-XXXXXXX.apps.googleusercontent.com'; // il tuo client ID

//   initialize(
//     callback: (cred: google.accounts.id.CredentialResponse) => void
//   ): void {
//     if (window.google?.accounts?.id) {
//       window.google.accounts.id.initialize({
//         client_id: this.clientId,
//         callback: (response) => {
//           this._credential.set(response);
//           callback(response);
//         },
//       });
//     } else {
//       console.error('Google Identity SDK non caricato');
//     }
//   }

//   renderButton(target: HTMLElement): void {
//     window.google?.accounts.id.renderButton(target, {
//       theme: 'outline',
//       size: 'large',
//       text: 'signin_with',
//       shape: 'pill',
//     });
//   }

//   prompt(): void {
//     window.google?.accounts.id.prompt();
//   }

//   logout(): void {
//     window.google?.accounts.id.disableAutoSelect();
//     this._credential.set(null);
//   }
// }
