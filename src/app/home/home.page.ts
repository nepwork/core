import { Component, OnInit } from '@angular/core';
import { RefresherEventDetail } from '@ionic/core';
import { IonSlides } from '@ionic/angular';
import { AnimationUtilService } from '../animations/animation-util.service';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  slideOpts = {};
  svgs = ['/assets/shape.svg', '/assets/shapeX.svg', '/assets/shapeY.svg'];
  cards: Card[];

  constructor(private animationUtil: AnimationUtilService) {}

  ngOnInit() {
    this.slideOpts = { speed: 1000, loop: true, ...this.animationUtil.flip };
    this.cards = new Array(
      {
        title: 'Welcome to 2020',
        subtitle: 'Happy New Year',
        img: '/assets/shape.svg',
        description: `The year 2020 has arrived and so has our annual grand party for
        welcoming the new year.. and this time the decade! Join us and bring
        your friends :)`
      },
      {
        title: 'Merry Christmas',
        subtitle: 'White & Red Christmas',
        img: null,
        description: 'Celebrate this Christmas in white snow with red Gluh wine.'
      }
    );
  }

  presentFilter() {}

  doRefresh(event: any) {
    setTimeout(() => event.target.complete(), 1500);
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
