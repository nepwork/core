import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { CardsService } from '../providers/cards.service';


@Component({
  selector: 'app-invite',
  templateUrl: 'invite.page.html',
  styleUrls: ['invite.page.scss']
})
export class InvitePage implements OnInit {
  queryText: string;
  invites: Card[];
  isInEvents = true;

  constructor(private cardsService: CardsService) {}

  ngOnInit() {}

  filterInvites() {}

  ionViewWillEnter() {
    this.invites = this.cardsService.randos;
  }

  doRefresh(event: any) {
    setTimeout(() => event.target.complete(), 1500);
  }

  presentFilter() {}

  segmentChanged(event: any) {
    this.isInEvents = event.detail.value === 'events';
  }
}
