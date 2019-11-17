import { Component, OnInit } from '@angular/core';
import { PlansService } from '../providers/plans.service';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-plan',
  templateUrl: 'plan.page.html',
  styleUrls: ['plan.page.scss']
})
export class PlanPage implements OnInit {
  isInPersonal = true;
  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];

  constructor(private plansService: PlansService) {}

  ngOnInit() {
    this.shownSessions = 1;
    this.plansService.plans$.subscribe(plans => this.groups = plans);
  }

  doRefresh(event: any) {
    setTimeout(() => event.target.complete(), 1500);
  }

  segmentChanged(event: any) {
    this.isInPersonal = event.detail.value === 'personal';
  }

  presentFilter() {}

  updateSchedule() {}

  openSocial() {}

  addFavorite() {}

  removeFavorite() {}
}
