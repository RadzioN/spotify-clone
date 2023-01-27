import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FavoriteButtonComponent, FsMusicPlayerComponent, FsMusicPlayerMobileComponent, MusicPlayerComponent, MusicPlayerMobileComponent, NavigationBarComponent, NavigationRailComponent, SharedModule } from './shared';

import { AppComponent } from './app.component';
import { MainModule } from './modules';

@NgModule({
  declarations: [
    AppComponent,
    NavigationRailComponent,
    NavigationBarComponent,
    MusicPlayerComponent,
    MusicPlayerMobileComponent,
    FavoriteButtonComponent,
    FsMusicPlayerComponent,
    FsMusicPlayerMobileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
