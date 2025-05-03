import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'naar-marketplace';

  // TODO: SE HO TEMPO LO TOLGO E SISTEMO I COLORI NELLE ALTRE PAGINE!
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((event) => {
        if (event.urlAfterRedirects === '/home') {
          document.body.classList.add('dark-home');
        } else {
          document.body.classList.remove('dark-home');
        }
      });
  }
}
