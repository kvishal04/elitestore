import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductdetailComponent } from '../../components/home/productdetail/productdetail.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: ProductdetailComponent },

    ],
  },
];
