import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@progress/kendo-angular-buttons';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-debug',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './debug.page.html',
  styleUrl: './debug.page.css',
})
export class DebugPage {
  private readonly _authService = inject(AuthService);

  readonly users = this._authService.users; // signal<User[]>

  clearUsers(): void {
    this._authService.clear();
  }
}
