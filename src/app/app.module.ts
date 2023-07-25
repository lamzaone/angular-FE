import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ActivitiesListComponent } from './Activities/activities-list/activities-list.component';
import { ActivitiesCardComponent } from './Activities/activities-card/activities-card.component';
import { TeamListComponent } from './Teams/team-list/team-list.component';
import { TeamCardComponent } from './Teams/team-card/team-card.component';
import { AddActivityCardComponent } from './add-card/add-activity-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActivitiesListComponent,
    ActivitiesCardComponent,
    TeamListComponent,
    TeamCardComponent,
    AddActivityCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

