import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ListCityComponent } from './pages/list-city/list-city.component';
import { ManageAdminComponent } from './components/manage-admin/manage-admin.component';
import { ManageCityComponent } from './components/manage-city/manage-city.component';
import { AuthGuard } from './config/AuthGuard';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: 'manage', component: AdminComponent,
    children: [
      {
        path: 'admin',
        component: ManageAdminComponent,
      },
      {
        path: 'city',
        component: ManageCityComponent,

      }
    ], canActivate: [AuthGuard]
  },
  { path: 'item', component: IndexPageComponent },
  { path: '', component: ListCityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
