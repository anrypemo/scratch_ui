import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./components/pages/login-page/login-page.component";
import {DashboardComponent} from "./components/pages/dashboard-page/dashboard.component";
import {LoginComponent} from "./components/login-form/login.component";
import {TravelInfoComponent} from "./components/travel-info/travel-info.component";
import {AuthGuard} from "./components/guards/auth.guard";
import {ResetPasswordComponent} from "./components/reset-password/reset.password.component";
import {RegistrationComponent} from "./components/registration/registration.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    children: [{
      path: '',
      component: LoginComponent
    },
      {
        path: 'reset-password',
        component: ResetPasswordComponent
      }]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'info',
        canActivate: [AuthGuard],
        component: TravelInfoComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {path: '', redirectTo: 'info', pathMatch: 'full'}
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
