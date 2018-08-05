import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroQuantity$: Observable<number>;

  constructor(private heroService: HeroService) {
    heroService.getHeroes()
    .subscribe(heroes => {
      heroService.updateHerosQutantity(heroes.length);
    });
    this.heroQuantity$ = heroService.getHeroesQutantity();
  }
}
