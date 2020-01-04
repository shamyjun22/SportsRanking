import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatButtonToggleModule, MatBadgeModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TeamsComponent } from './teams/teams.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SchedulesComponent,
    GalleryComponent,
    AboutUsComponent,
    NavComponent,
    NotFoundComponent,
    TeamsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatBadgeModule,

    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'schedules', component:SchedulesComponent},
      {path:'gallery', component:GalleryComponent},
      {path:'teams', component:TeamsComponent},
      {path:'about-us', component:AboutUsComponent},
      {path:'**', component:NotFoundComponent},
    ]),

    LayoutModule,

    MatSidenavModule,

    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
