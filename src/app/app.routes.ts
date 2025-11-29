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
  {
    path: 'about-us',
    loadComponent: () => import('./modules/home/pages/about-us/about-us.component').then(c => c.AboutUsComponent)
  },
  {
    path: 'pet-collar',
    loadComponent: () => import('./modules/home/pages/product/product.component').then(c => c.ProductComponent)
  },
  {
    path: 'pet-washing-gloves',
    loadComponent: () => import('./modules/home/pages/pet-washing-gloves/pet-washing-gloves.component').then(c => c.PetWashingGlovesComponent)
  },
  {
    path: 'pet-hair-remover',
    loadComponent: () => import('./modules/home/pages/pet-hair-remover/pet-hair-remover.component').then(c => c.PetHairRemoverComponent)
  },
  {
    path: 'pet-pill-shooter',
    loadComponent: () => import('./modules/home/pages/pet-nursing-supplies/pet-nursing-supplies.component').then(c => c.PetNursingSuppliesComponent)
  },
  {
    path: 'privacy',
    loadComponent: () => import('./modules/home/pages/privacy/privacy.component').then(c => c.PrivacyComponent)
  },
  {
    path: 'file-upload',
    loadComponent: () => import('./modules/home/pages/file-upload/file-upload.component').then(c => c.FileUploadComponent)
  },
  { path: '**', redirectTo: '/' }
];