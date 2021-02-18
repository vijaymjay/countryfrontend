import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },  
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'country',
    loadChildren: () => import('./country/country.module').then(m => m.CountryModule),
  },
  // otherwise redirect to home
{ path: '**', redirectTo: '' }
];

export const AppRoutingModule: ModuleWithProviders<any> = RouterModule.forRoot(routes)
