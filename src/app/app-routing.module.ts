import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ListCityComponent } from './pages/list-city/list-city.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'item', component: IndexPageComponent},
  {path: '', component: ListCityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
