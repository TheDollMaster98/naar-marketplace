import { Routes } from '@angular/router';
import { HomePage } from './pages/home.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'home', component: HomePage },
  //   { path: 'register', component: RegisterPage },
  { path: '**', redirectTo: '' }, //TODO: da fare pagina 404
];
