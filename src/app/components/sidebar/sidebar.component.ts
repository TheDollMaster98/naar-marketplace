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
    { icon: 'bi-house', title: 'Home', route: '/' },
    { icon: 'bi-person-circle', title: 'Profile', route: '/register' },
  ];
}
