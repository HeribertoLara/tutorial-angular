import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // Push inserta un termino de busqueda.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // espera 300 ms  antes de pasar a la ultima cadena
      debounceTime(300),

      // asegura que se envíe una solicitud solo si el texto del filtro cambió.
      distinctUntilChanged(),

    // Cancela y descarta los observables de búsqueda anteriores, devolviendo solo el último servicio de búsqueda observable.
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}