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

const appRoutes: Routes = [
  { path: '', component: MovieListComponent }
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
    CastListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
