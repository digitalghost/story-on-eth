import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LatestComponent }   from './latest/latest.component';
import { HottestComponent }   from './hottest/hottest.component';

const routes: Routes = [
  { path: 'latest', component: LatestComponent },
  { path: 'hottest', component: HottestComponent },
  { path: '', redirectTo: '/latest', pathMatch: 'full' },
  /*
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },*/
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes) 
  ]
})
export class AppRoutingModule { }
