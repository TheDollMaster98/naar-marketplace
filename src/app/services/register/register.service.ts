import { Injectable, signal } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  // Lista utenti registrati
  private readonly _registeredUsers = signal<User[]>([]);

  // ! Ho messo private e readonly per evitare di modificare la lista di users dall'esterno del servizio.
  readonly users = this._registeredUsers.asReadonly();

  // metodo per aggiungere un utente alla lista di utenti registrati
  registerUser(user: User): void {
    this._registeredUsers.update((users) => [...users, user]);
  }

  // metood per rimuovere tutti gli utenti registrati
  clear(): void {
    this._registeredUsers.set([]);
  }

  // metodo per rimuovere un utente dalla lista di utenti
  removeByEmail(email: string): void {
    this._registeredUsers.update((users) =>
      users.filter((u) => u.email !== email)
    );
  }
}
