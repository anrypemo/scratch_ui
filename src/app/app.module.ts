import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AngularSvgIconModule} from 'angular-svg-icon';


import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {MapComponent} from './components/shared-components/map/map.component';
import {UserAuthService} from './services/user-auth.service';
import {WindroseComponent} from './components/shared-components/windrose/windrose.component';
import {DashboardComponent} from "./components/pages/dashboard-page/dashboard.component";
import {LoginPageComponent} from "./components/pages/login-page/login-page.component";
import {LoginComponent} from "./components/login-form/login.component";
import {UiComponentsModule} from "./components/shared-components/ui-components/ui-components.module";
import {TravelInfoComponent} from "./components/travel-info/travel-info.component";
import {AuthGuard} from "./guards/auth.guard";
import {ResetPasswordComponent} from "./components/reset-password/reset.password.component";
import { RegistrationComponent } from './components/registration/registration.component';
import {LocalStorageService} from "./services/localstorage.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LibraryComponent } from './components/library/library.component';
import {HttpService} from "./services/http.service";
import {HeaderCustomerInfoComponent} from "./components/header/header-customer-info/header.customer.info.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    WindroseComponent,
    DashboardComponent,
    LoginPageComponent,
    LoginComponent,
    TravelInfoComponent,
    ResetPasswordComponent,
    RegistrationComponent,
    LibraryComponent,
    HeaderCustomerInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule,
    UiComponentsModule
  ],
  providers: [
    UserAuthService,
    AuthGuard,
    LocalStorageService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
