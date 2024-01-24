import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';

import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutRootComponent } from './layouts/layout-root/layout-root.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewHeroPageComponent } from './pages/new-hero-page/new-hero-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutRootComponent,
    ListPageComponent,
    NewHeroPageComponent,
    SearchPageComponent,
  ],
  imports: [CommonModule, HeroesRoutingModule],
})
export class HeroesModule {}