import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Observable} from "rxjs";
import { OwnerEntity } from '../interfaces/owner-entity';

@Injectable({
  providedIn: 'root'
})

export class InMemHeroService implements InMemoryDbService {
  createDb() {
    let owners:Array<OwnerEntity> = [];
    return {owners};
  }

  genId(owners: OwnerEntity[]): number {
    return owners.length > 0 ? Math.max(...owners.map(hero => hero.id)) + 1 : 11;
  }

}
