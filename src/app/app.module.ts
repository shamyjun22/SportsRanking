import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { RankingComponent } from './ranking/ranking.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SchedulesComponent,
    RankingComponent,
    GalleryComponent,
    AboutUsComponent,
    NavComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule.forRoot([
      {path:'', component: NavComponent},
      {path:'home', component:HomeComponent},
      {path:'schedules', component:SchedulesComponent},
      {path:'ranking', component:RankingComponent},
      {path:'gallery', component:GalleryComponent},
      {path:'about-us', component:AboutUsComponent},
      {path:'**', component:NotFoundComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
