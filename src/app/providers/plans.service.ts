import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  constructor() { }

  get plans$() {
    return of([
      {
        time: 'Sat, Nov 30',
        sessions: [
          {
            name: 'Gran Dinner',
            timeStart: '8:00 pm',
            timeEnd: '9:00 pm',
            location: 'Dining Hall',
            tracks: ['Food'],
            id: '1'
          }
        ]
      },
      {
        time: 'Sun, Dec 1',
        sessions: [
          {
            name: 'Getting Started',
            location: 'Hall 2',
            description:
              'Mobile devices ',
            speakerNames: ['Ted Turtle'],
            timeStart: '9:30 am',
            timeEnd: '9:45 am',
            tracks: ['Ionic'],
            id: '2'
          },
          {
            name: 'Winter Cooling',
            location: 'Executive Ballroom',
            description:
              'Development and Angular.',
            speakerNames: ['Rachel Rabbit'],
            timeStart: '9:45 am',
            timeEnd: '10:00 am',
            tracks: ['Tooling'],
            id: '3'
          },
          {
            name: 'Traffic Light Party',
            location: 'Hall 3',
            description:
              'Now advanced enough that developers can build native-quality mobile.',
            speakerNames: ['Ellie Elephant'],
            timeStart: '9:15 pm',
            timeEnd: '5:30 am',
            tracks: ['Ionic'],
            id: '4'
          }
        ]
      },
      {
        time: 'Wed, Dec 25',
        sessions: [
          {
            name: 'Open House Christmas Karaoke',
            location: 'Hall 2',
            description:
              'Mobile devices ',
            speakerNames: ['Ted Turtle'],
            timeStart: '9:30 am',
            timeEnd: '9:45 am',
            tracks: ['Ionic'],
            id: '2'
          },
        ]
      },
      {
        time: 'Thu, Dec 26',
        sessions: [
          {
            name: 'Getting Started Vol 2',
            location: 'Hall 2',
            description:
              'Mobile devices ',
            speakerNames: ['Ted Turtle'],
            timeStart: '9:30 am',
            timeEnd: '9:45 am',
            tracks: ['Ionic'],
            id: '2'
          },
          {
            name: 'Winter Cooling Vol 2',
            location: 'Executive Ballroom',
            description:
              'Development and Angular.',
            speakerNames: ['Rachel Rabbit'],
            timeStart: '9:45 am',
            timeEnd: '10:00 am',
            tracks: ['Tooling'],
            id: '3'
          },
          {
            name: 'Traffic Light Party Vol 2',
            location: 'Hall 3',
            description:
              'Now advanced enough that developers can build native-quality mobile.',
            speakerNames: ['Ellie Elephant'],
            timeStart: '9:15 pm',
            timeEnd: '5:30 am',
            tracks: ['Ionic'],
            id: '4'
          }
        ]
      },
      {
        time: 'Fri, Dec 27',
        sessions: [
          {
            name: 'Getting Started Vol 3',
            location: 'Hall 2',
            description:
              'Mobile devices ',
            speakerNames: ['Ted Turtle'],
            timeStart: '9:30 am',
            timeEnd: '9:45 am',
            tracks: ['Ionic'],
            id: '2'
          },
          {
            name: 'Winter Cooling Vol 3',
            location: 'Executive Ballroom',
            description:
              'Development and Angular.',
            speakerNames: ['Rachel Rabbit'],
            timeStart: '9:45 am',
            timeEnd: '10:00 am',
            tracks: ['Tooling'],
            id: '3'
          },
          {
            name: 'Traffic Light Party Vol 3',
            location: 'Hall 3',
            description:
              'Now advanced enough that developers can build native-quality mobile.',
            speakerNames: ['Ellie Elephant'],
            timeStart: '9:15 pm',
            timeEnd: '5:30 am',
            tracks: ['Ionic'],
            id: '4'
          }
        ]
      }

    ]);
  }
}
