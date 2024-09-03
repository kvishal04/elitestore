import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { ForgotComponent } from './components/auth/forgot/forgot.component';


export const routes: Routes = [

    {
        path: 'home',
        loadChildren: () =>
          import('./routes/home/home.routes').then((m) => m.homeRoutes),
    },
    {
        path: 'admin',
        loadChildren: () =>
          import('./routes/admin/admin.routes').then((m) => m.adminRoutes),
    },

    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'forgot',
        component: ForgotComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
];
