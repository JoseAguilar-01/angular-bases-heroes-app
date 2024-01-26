import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``,
})
export class HeroPageComponent implements OnInit {
  hero?: Hero;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) =>
      this.getHero(params['id'])
    );
  }

  getHero(id: string) {
    this.heroesService.getHero(id).subscribe((hero) => {
      if (!hero) {
        return this.router.navigate(['/heroes/list']);
      }

      return (this.hero = hero);
    });
  }

  goBack() {
    this.router.navigateByUrl('/heroes/list');
  }
}
