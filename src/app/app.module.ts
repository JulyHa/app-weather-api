import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { IndexComponent } from './components/index/index.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { AdminComponent } from './pages/admin/admin.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ItemPageComponent } from './pages/item-page/item-page.component';
import { UpperCasePipe, registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import { ListCityComponent } from './pages/list-city/list-city.component';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';

// Đăng ký locales tiếng Việt
registerLocaleData(localeVi);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    LoginPageComponent,
    RegisterPageComponent,
    IndexPageComponent,
    AdminComponent,
    ItemPageComponent,
    ListCityComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    CardModule,
    DropdownModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UpperCasePipe,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    ToastModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'vi' // Đặt locales tiếng Việt
  },
  ConfirmationService,
  MessageService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
