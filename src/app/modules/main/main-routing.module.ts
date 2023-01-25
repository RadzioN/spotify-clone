import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesConfig } from 'src/app/core';

import { HomeComponent } from './pages/home/home.component';
import { LibraryComponent } from './pages/library/library.component';
import { SearchComponent } from './pages/search/search.component';
import { SettingsComponent } from './pages/settings/settings.component';

const mainRoutes = RoutesConfig.routesNames.main;

const routes: Routes = [
    { path: "", redirectTo: mainRoutes.home, pathMatch: "full" },
    { path: mainRoutes.home, component: HomeComponent },
    { path: mainRoutes.search, component: SearchComponent },
    { path: mainRoutes.library, component: LibraryComponent },
    { path: mainRoutes.settings, component: SettingsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
