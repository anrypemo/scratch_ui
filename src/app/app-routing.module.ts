import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapComponent} from './components/shared-components/map/map.component';
import {LoginPageComponent} from "./components/pages/login-page/login-page.component";
import {DashboardComponent} from "./components/pages/dashboard-page/dashboard.component";
import {LoginComponent} from "./components/login-form/login.component";

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
    children: [
      {
        path: 'info',
        component: MapComponent
      },
    ]
  },

  {path: '', redirectTo: 'info', pathMatch: 'full'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
