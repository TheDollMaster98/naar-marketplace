import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  sections = [
    { icon: 'bi-house', title: 'Home', route: '/home' },
    { icon: 'bi-grid', title: 'Products', route: '/products' },
    { icon: 'bi-person-circle', title: 'Profile', route: '/register' },
  ];
}
