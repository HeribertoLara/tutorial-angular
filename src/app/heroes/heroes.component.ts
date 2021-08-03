import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
// agrega un nuevo heroe 
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    // manda a llamar al servicio de agregar 
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
// borrar un heroe
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    // manda a llamar al servicio de borrado
    this.heroService.deleteHero(hero.id).subscribe();
  }

}