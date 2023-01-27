import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateChildGuard, RoutesConfig } from './core';

const routes: Routes = [
  { path: "", redirectTo: 'main', pathMatch: "full" },
  {
    path: RoutesConfig.basePaths.main,
    canActivateChild: [CanActivateChildGuard],
    loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule),
  },
  //{ path: "**", redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
