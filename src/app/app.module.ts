import { FormsModule } from '@angular/forms';
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
import { SideMenuListComponent } from './Sidemenu/side-menu-list/side-menu-list.component';
import { SideMenuCardComponent } from './Activities/side-menu-card/side-menu-card.component';
import { NavbarCardComponent } from './navbar/navbar-card/navbar-card.component';
import { Routes, RouterModule } from '@angular/router';
import { ProfileLogoComponent } from './Profile/profile-logo/profile-logo.component';
import { ProfileExpandListComponent } from './Profile/profile-expand-list/profile-expand-list.component';
import { LoginFormComponent } from './Login/login-form/login-form.component';
import { MentorDashBoardComponent } from './Dashboard/mentor-dash-board/mentor-dash-board.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { UpcomingActivitiesWidgetComponent } from './Dashboard/mentor-dash-board/upcoming-activities-widget/upcoming-activities-widget.component';
import { OngoingContentComponent } from './Ongoing/ongoing-content/ongoing-content.component';
import { ManagementListComponent } from './Management/management-list/management-list.component';
import { GradesListComponent } from './Activities/grades-list/grades-list.component';


const   routes: Routes = [
  { path: '', redirectTo: 'LogIn', pathMatch: 'full' },
  { path: 'LogIn', component: LoginFormComponent },
  {
    path: 'Mentor',
    component: AppLayoutComponent,
    children: [
      { path: 'Home',component: MentorDashBoardComponent},      
      { path: 'Ongoing', component: OngoingContentComponent},
      { path: 'Management', component: ManagementListComponent },
    ],
  },
  {
    path: 'Student',
    component: AppLayoutComponent, 
    children: [
      { path: 'Home',component: MentorDashBoardComponent},      
      { path: 'Team', component: TeamListComponent },
      { path: 'Activities', component: ActivitiesListComponent },
    ],
  },
  // { path: 'Student/Home', component: MentorDashBoardComponent },
  // { path: 'Student/Team', component: TeamListComponent },
  // { path: 'Student/Activities', component: ActivitiesListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActivitiesListComponent,
    ActivitiesCardComponent,
    TeamListComponent,
    TeamCardComponent,
    AddActivityCardComponent,
    SideMenuListComponent,
    SideMenuCardComponent,
    NavbarCardComponent,
    ProfileLogoComponent,
    ProfileExpandListComponent,
    LoginFormComponent,
    MentorDashBoardComponent,
    AppLayoutComponent,
    UpcomingActivitiesWidgetComponent,
    OngoingContentComponent,
    ManagementListComponent,
    GradesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

