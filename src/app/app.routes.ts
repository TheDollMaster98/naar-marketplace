import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home.page';
import { RegisterPage } from './pages/register-page/register.page';
import { ProductsPage } from './pages/products/products.page';
import { LoginPage } from './pages/login/login.page';
import { DebugPage } from './pages/debug/debug.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  // TODO: lazyloading serve? credo di no essendo piccola
  //   { path: 'home', loadComponent: () => import('./pages/home.page').then(m => m.HomePage) },
  { path: 'home', component: HomePage },
  { path: 'products', component: ProductsPage },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: 'debug', component: DebugPage },
  { path: '**', redirectTo: '' }, //TODO: da fare pagina 404
];
