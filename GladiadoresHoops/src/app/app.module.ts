import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TeamsService } from './Teams/teams.service';
import { DataStorageService } from './shared/data-storage.service';
import {AppRoutingModule} from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { TeamsListComponent } from './Teams/teams-list/teams-list.component';
import { TeamsListEditComponent } from './Teams/teams-list-edit/teams-list-edit.component';
import { TeamsManageComponent } from './Teams/teams-manage/teams-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    HeaderComponent,
    AboutComponent,
    TeamsListComponent,
    TeamsListEditComponent,
    TeamsManageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TeamsService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
