import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
      path: '',
      loadChildren: () => import('./store/store.module').then(m => m.StoreModule)
    },
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    { 
      path: '**', 
      loadChildren: () => import('./shared/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
    }
];