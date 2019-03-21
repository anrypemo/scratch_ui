import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./components/pages/login-page/login-page.component";
import {DashboardComponent} from "./components/pages/dashboard-page/dashboard.component";
import {LoginComponent} from "./components/login-form/login.component";
import {TravelInfoComponent} from "./components/travel-info/travel-info.component";
import {AuthGuard} from "./components/guards/auth.guard";

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    children: [{
      path: '',
      component: LoginComponent
    }]
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: 'info',
        canActivate:[AuthGuard],
        component: TravelInfoComponent
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
