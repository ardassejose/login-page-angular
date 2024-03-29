import { Routes } from '@angular/router';
import { SignUpComponent } from './pages/signup/signup.component'
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
];
