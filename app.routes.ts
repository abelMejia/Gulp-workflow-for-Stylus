import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    title: 'Auth'
  },
  {
    path: '',
    loadChildren: () => import('./store/store.module').then(m => m.StoreModule),
    title: 'Store'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    title: 'Home'
  },
  { 
    path: '**', 
    loadChildren: () => import('./shared/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
    title: 'PageNotFound'
  }
];