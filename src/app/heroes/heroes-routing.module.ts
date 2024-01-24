import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutRootComponent } from './layouts/layout-root/layout-root.component';
import { NewHeroPageComponent } from './pages/new-hero-page/new-hero-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutRootComponent,
    children: [
      {
        path: 'new-hero',
        component: NewHeroPageComponent,
      },
      {
        path: 'list',
        component: ListPageComponent,
      },
      {
        path: 'search',
        component: SearchPageComponent,
      },
      {
        path: 'edit/:id',
        component: NewHeroPageComponent,
      },
      {
        path: ':id',
        component: HeroPageComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
