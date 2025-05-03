import { Injectable, signal } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _users = signal<User[]>([]); // Lista utenti registrati
  private readonly _loggedIn = signal<boolean>(false); // Controllo se l'utente è loggato
  private readonly _currentUser = signal<User | null>(null); // Utente loggato

  // ! Ho messo private e readonly per evitare di modificare la lista di users dall'esterno del servizio.
  readonly users = this._users.asReadonly();
  readonly isLoggedIn = this._loggedIn.asReadonly();
  readonly currentUser = this._currentUser.asReadonly();

  // metodo per aggiungere un utente alla lista di utenti registrati
  registerUser(user: User): void {
    this._users.update((users) => [...users, user]);
  }

  /** Verifica se l'utente è valido */
  private isValidUser(username: string, password: string): User | undefined {
    return this._users().find(
      (u) => u.username === username && u.password === password
    );
  }

  /** Login con credenziali
   * rework del metodo, prima lo usavo come login + check registrazione
   */
  loginUser(username: string, password: string): boolean {
    const user = this.isValidUser(username, password);
    if (!user) {
      this.logout();
      console.log('Credenziali errate!');
      return false;
    }

    this._loggedIn.set(true);
    this._currentUser.set(user);
    console.log(`Utente loggato: ${user.username}`);
    return true;
  }

  /** Logout manuale */
  logout(): void {
    this._loggedIn.set(false);
    this._currentUser.set(null);
    console.log('Utente disconnesso!');
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
