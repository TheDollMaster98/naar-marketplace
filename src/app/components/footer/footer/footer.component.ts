import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  router = inject(Router);

  // la uso per dark/light mode, visto che ho fatto solo la home dark, senza switch dei temi
  get isHomePage(): boolean {
    return this.router.url === '/' || this.router.url === '/home';
  }
}
