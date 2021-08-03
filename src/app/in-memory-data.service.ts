import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
    {id:11, name: 'Wolverine' },
    {id:12, name: 'Aguja dinamica' },
    {id:13, name: 'Lobezno' },
    {id:14, name: 'Guepardo' },
    {id:15, name: 'Cyclops' },
    {id:16, name: 'Dr. Manhatan' },
    {id:17, name: 'Iron Man' },
    {id:18, name: 'Spiderman' },
    {id:19, name: 'Batman' },
    {id:20, name: 'Groot' },
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}