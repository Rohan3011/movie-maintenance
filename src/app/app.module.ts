import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieBannerComponent } from './components/movie-banner/movie-banner.component';
import { ActorCardComponent } from './components/actor-card/actor-card.component';
import { CastListComponent } from './components/cast-list/cast-list.component';
import { ActorListComponent } from './components/actor-list/actor-list.component';
import { ActorBannerComponent } from './components/actor-banner/actor-banner.component';
import { FeaturedListComponent } from './components/featured-list/featured-list.component';
import { StoreModule } from '@ngrx/store';

const appRoutes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'actors', component: ActorListComponent },
  { path: 'movies/:id', component: MovieBannerComponent },
  { path: 'actors/:id', component: ActorBannerComponent },
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MovieCardComponent,
    MovieListComponent,
    MovieBannerComponent,
    ActorCardComponent,
    CastListComponent,
    ActorListComponent,
    ActorBannerComponent,
    FeaturedListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
