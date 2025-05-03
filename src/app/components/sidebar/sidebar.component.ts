import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KENDO_POPOVER, KENDO_TOOLTIPS } from '@progress/kendo-angular-tooltip';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, KENDO_POPOVER, KENDO_TOOLTIPS],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  private readonly _authService = inject(AuthService);
  readonly isLoggedIn = this._authService.isLoggedIn;

  sections = [
    { icon: 'bi-house', title: 'Home', route: '/home' },
    { icon: 'bi-grid', title: 'Products', route: '/products' },
    { icon: 'bi-person-circle', title: 'Profile', route: '/login' },
  ];
}
