import { Routes } from '@angular/router';
import { authGuard } from './core/guard/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home.page').then((m) => m.HomePage),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home-page/home.page').then((m) => m.HomePage),
  },
  {
    path: 'products',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/products/products.page').then((m) => m.ProductsPage),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register-page/register.page').then((m) => m.RegisterPage),
  },
  {
    path: 'debug',
    loadComponent: () =>
      import('./pages/debug/debug.page').then((m) => m.DebugPage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
