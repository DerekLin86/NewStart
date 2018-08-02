import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', loadChildren: './heroes/heroes.module#HeroesModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
