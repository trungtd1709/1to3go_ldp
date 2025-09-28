import { Routes } from '@angular/router';

export const routes: Routes = [
  // Redirect root to dashboard or landing page
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  {
    path: '',
    loadComponent: () => import('./modules/home/pages/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./modules/home/pages/contact/contact.component').then(c => c.ContactComponent)
  },
  { path: '**', redirectTo: '/' }
];