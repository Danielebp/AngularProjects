import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import {AboutComponent} from './about/about.component';
import {TeamsListComponent} from './Teams/teams-list/teams-list.component';
import {TeamsManageComponent} from './Teams/teams-manage/teams-manage.component';

const appRoutes: Routes = [
  // { path: 'equipos', component: RegistrationFormComponent, children: [
  //     { path: 'incluir', component: RegistrationFormComponent },
  //     { path: 'gestionar', component: TeamsComponent },
  //   ]
  // }
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'equipos', component: TeamsListComponent },
  { path: 'equipos/incluir', component: RegistrationFormComponent },
  { path: 'equipos/gestionar', component: TeamsManageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
