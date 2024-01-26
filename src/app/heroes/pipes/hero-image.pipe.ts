import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroImage',
})
export class HeroImagePipe implements PipeTransform {
  transform(hero: Hero) {
    let imageUrl = `../../../assets/images/${hero.id}.jpg`;

    if (!hero.id && !hero.image) {
      imageUrl = '../../../assets/images/no-image.png';
    }

    if (hero.image) return hero.image;

    return imageUrl;
  }
}
