import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AngularSvgIconModule} from 'angular-svg-icon';


import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {InformationComponent} from './components/information/information.component';
import {UserAuthService} from './services/user-auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule
  ],
  providers: [UserAuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
