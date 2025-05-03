import { Injectable, signal } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Lista utenti registrati
  private readonly _users = signal<User[]>([]);

  // Controllo se l'utente è loggato
  private readonly _loggedIn = signal<boolean>(false);

  // ! Ho messo private e readonly per evitare di modificare la lista di users dall'esterno del servizio.
  readonly users = this._users.asReadonly();

  isLoggedIn(): boolean {
    return this._loggedIn();
  }

  login() {
    this._loggedIn.set(true);
  }

  logout() {
    this._loggedIn.set(false);
  }

  // metodo per aggiungere un utente alla lista di utenti registrati
  registerUser(user: User): void {
    this._users.update((users) => [...users, user]);
  }

  // metodo per verificare se un utente è registrato
  loginUser(username: string, password: string): boolean {
    const user = this._users().find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      console.log('Utente non trovato!');
      return false;
    }
    this.login();

    return !!user;
  }

  // metood per rimuovere tutti gli utenti registrati
  clear(): void {
    this._users.set([]);
  }

  // metodo per rimuovere un utente dalla lista di utenti
  removeByEmail(email: string): void {
    this._users.update((users) => users.filter((u) => u.email !== email));
  }
}
