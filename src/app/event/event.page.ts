import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { AnimationUtilService } from '../animations/animation-util.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss']
})
export class EventPage implements OnInit {
  event = 'New Year 2020';
  slideOpts = {};
  svgs = ['/assets/shape.svg', '/assets/shapeX.svg', '/assets/shapeY.svg'];
  avatars = new Array(15).fill(0).map((_, i) => i % 6);
  isAvatarExpanded = false;

  constructor(private animationUtil: AnimationUtilService) {}

  ngOnInit() {
    this.slideOpts = { speed: 1000, loop: true, ...this.animationUtil.flip };
  }

  get topAvatars() {
    return this.avatars.slice(0, 6);
  }

  get moreAvatars() {
    return this.avatars.slice(4);
  }

  presentFilter() {}

  doRefresh(event: any) {
    setTimeout(() => event.target.complete(), 1500);
  }

  avatarExpansionToggle() {
    this.isAvatarExpanded = !this.isAvatarExpanded;
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
