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
import {AuthGuard} from "./components/guards/auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    WindroseComponent,
    DashboardComponent,
    LoginPageComponent,
    LoginComponent,
    TravelInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule,
    UiComponentsModule
  ],
  providers: [UserAuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
