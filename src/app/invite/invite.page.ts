import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { AnimationUtilService } from '../animations/animation-util.service';
import { Invite } from '../models/invite.model';

import * as Faker from 'faker';


@Component({
  selector: 'app-invite',
  templateUrl: 'invite.page.html',
  styleUrls: ['invite.page.scss']
})
export class InvitePage implements OnInit {
  slideOpts: any;

  svgs = ['/assets/shape.svg', '/assets/shapeX.svg', '/assets/shapeY.svg'];
  invites: Invite[];

  constructor(private animationUtil: AnimationUtilService) {}

  ngOnInit() {
    this.slideOpts = this.animationUtil.cube;
  }

  ionViewWillEnter() {
    this.invites = Array(20).fill(0).map(_ => ({
      title: Faker.lorem.words(2),
      subtitle: Faker.company.catchPhrase(),
      img: null,
      description: Faker.lorem.sentences(3)
    }));
  }

  afterSlidesLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  slideTouchStarted(slides: IonSlides) {
    slides.stopAutoplay();
  }

  slideTouchEnded(slides: IonSlides) {
    setTimeout(() => slides.startAutoplay(), 1000);
  }
}
