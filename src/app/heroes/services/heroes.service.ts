import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getHeroes() {
    return this.httpClient.get<Hero[]>(`${this.apiUrl}/heroes`).pipe(
      catchError((error) => {
        console.log('🚀 ~ HeroesService ~ getHeroes ~ error:', error);
        return of(undefined);
      })
    );
  }

  getHero(id: string) {
    return this.httpClient.get<Hero>(`${this.apiUrl}/heroes/${id}`).pipe(
      catchError((error) => {
        console.log('🚀 ~ HeroesService ~ getHero ~ error:', error);
        return of(undefined);
      })
    );
  }

  createHero(hero: Hero) {
    this.httpClient.post(`${this.apiUrl}/heroes`, hero).pipe(
      catchError((error) => {
        console.log(
          '🚀 ~ HeroesService ~ this.httpClient.post ~ error:',
          error
        );
        return of(undefined);
      })
    );
  }
}
