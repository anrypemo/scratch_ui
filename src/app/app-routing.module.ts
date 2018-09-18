import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InformationComponent} from './components/information/information.component';

const routes: Routes = [
  {path: '', redirectTo: 'info', pathMatch: 'full'},
  {path: 'info', component: InformationComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
