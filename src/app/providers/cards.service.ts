import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';
import * as Faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  constructor() {}

  get randos(): Card[] {
    return Array(20)
      .fill(0)
      .map(_ => ({
        title: Faker.lorem.words(1),
        subtitle: Faker.company.bsBuzz() + ' ' + Faker.hacker.ingverb(),
        img: null,
        description: Faker.lorem.sentences(3)
      }));
  }
}
