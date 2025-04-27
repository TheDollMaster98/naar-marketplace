import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home.page';
import { RegisterPage } from './pages/register-page/register.page';
import { ProductsPage } from './pages/products/products.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  // TODO: lazyloading serve? credo di no essendo piccola
  //   { path: 'home', loadComponent: () => import('./pages/home.page').then(m => m.HomePage) },
  { path: 'home', component: HomePage },
  { path: 'products', component: ProductsPage },
  { path: 'register', component: RegisterPage },
  { path: '**', redirectTo: '' }, //TODO: da fare pagina 404
];
