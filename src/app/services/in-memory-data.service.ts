import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Observable} from "rxjs";
import { OwnerEntity } from '../interfaces/owner-entity';

@Injectable({
  providedIn: 'root'
})

export class InMemHeroService implements InMemoryDbService {
  createDb() {
    let owners = [
      { id: 1, name: 'Windstorm',model:"asdadasd" },
      { id: 1, name: 'Windstorm',model:"asdadasd" },
    ];
    return {owners};
  }

  genId(owners: OwnerEntity[]): number {
    return owners.length > 0 ? Math.max(...owners.map(hero => hero.aId)) + 1 : 11;
  }

}
