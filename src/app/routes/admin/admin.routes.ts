import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductmgmtComponent } from '../../components/admin/productmgmt/productmgmt.component';
import { UsermgmtComponent } from '../../components/admin/usermgmt/usermgmt.component';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: UsermgmtComponent },
      { path: 'product', component: ProductmgmtComponent },

    ],
  },
];
