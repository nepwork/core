import { Component } from '@angular/core';
import { CardsService } from '../providers/cards.service';

@Component({
  selector: 'app-organize',
  templateUrl: 'organize.page.html',
  styleUrls: ['organize.page.scss']
})
export class OrganizePage {
  events = [];
  surveys = [];

  isInEvents = true;

  queryText: string;

  constructor(private cardsService: CardsService) {}

  ionViewWillEnter() {
    this.events = this.cardsService.randos;
    this.surveys = this.cardsService.randos;
  }

  segmentChanged(event: any) {
    this.isInEvents = event.detail.value === 'events';
  }

  filterCards() {}

  doRefresh(event: any) {
    setTimeout(() => event.target.complete(), 1500);
  }

  presentFilter() {}
}
