import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { DialogService } from './dialog.service';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroQuantity$: Observable<number>;

  constructor(
    private heroService: HeroService,
    private dialogService: DialogService,
    public messageService: MessageService,)
  {
    heroService.getHeroes()
    .subscribe(heroes => {
      heroService.updateHerosQutantity(heroes.length);
    });
    this.heroQuantity$ = heroService.getHeroesQutantity();
  }

  confirm_clear() {
    this.dialogService.confirm('Do you really want to clear?').then(
      result => {
        if (result) {
          this.messageService.clear(true);
        }
    });
  }
}
