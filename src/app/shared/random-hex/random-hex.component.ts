import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-hex',
  templateUrl: './random-hex.component.html',
  styleUrls: ['./random-hex.component.scss']
})
export class RandomHexComponent implements OnInit {
  list: { aToF: string; spaced0To6: string }[];
  private aToF = Array.from('abcdef');
  private points = ['3 6', '3 0', '6 4', '6 2', '0 4', '0 2', '2 4'];
  private randomMinToMax = (max: number, min = 0) => Math.floor(Math.random() * max) + min;

  constructor() {}

  ngOnInit() {
    this.list = Array(12)
      .fill(0)
      .map(_ => ({
        aToF: this.aToF[this.randomMinToMax(5)],
        spaced0To6: Array(this.randomMinToMax(4, 3))
          .fill(0)
          .map(o => this.points[this.randomMinToMax(6)])
          .join(' ')
      }));
  }
}
