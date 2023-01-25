import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { MainRoutingModule } from './main-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { LibraryComponent } from './pages/library/library.component';
import { SettingsComponent } from './pages/settings/settings.component';

@NgModule({
    declarations: [
        //Pages
        HomeComponent,
        SearchComponent,
        LibraryComponent,
        SettingsComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        MainRoutingModule,
    ]
})
export class MainModule { }
