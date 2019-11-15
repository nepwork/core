import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: 'plan.page.html',
  styleUrls: ['plan.page.scss']
})
export class PlanPage implements OnInit {
  ios: boolean;
  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];

  constructor() {}

  ngOnInit() {
    this.shownSessions = 1;
    this.groups = [
      {
        time: '8:00 am',
        sessions: [
          {
            name: 'Breakfast',
            timeStart: '8:00 am',
            timeEnd: '9:00 am',
            location: 'Dining Hall',
            tracks: ['Food'],
            id: '1'
          }
        ]
      },
      {
        time: '9:15 am',
        sessions: [
          {
            name: 'Getting Started with Ionic',
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
            name: 'Ionic Tooling',
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
            name: 'University of Ionic',
            location: 'Hall 3',
            description:
              'Now advanced enough that developers can build native-quality mobile.',
            speakerNames: ['Ellie Elephant'],
            timeStart: '9:15 am',
            timeEnd: '9:30 am',
            tracks: ['Ionic'],
            id: '4'
          }
        ]
      },
      {
        time: '9:15 am',
        sessions: [
          {
            name: 'Getting Started with Ionic',
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
            name: 'Ionic Tooling',
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
            name: 'University of Ionic',
            location: 'Hall 3',
            description:
              'Now advanced enough that developers can build native-quality mobile.',
            speakerNames: ['Ellie Elephant'],
            timeStart: '9:15 am',
            timeEnd: '9:30 am',
            tracks: ['Ionic'],
            id: '4'
          },
          {
            name: 'Getting Started with Ionic',
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
            name: 'Ionic Tooling',
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
            name: 'University of Ionic',
            location: 'Hall 3',
            description:
              'Now advanced enough that developers can build native-quality mobile.',
            speakerNames: ['Ellie Elephant'],
            timeStart: '9:15 am',
            timeEnd: '9:30 am',
            tracks: ['Ionic'],
            id: '4'
          },
          {
            name: 'Getting Started with Ionic',
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
            name: 'Ionic Tooling',
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
            name: 'University of Ionic',
            location: 'Hall 3',
            description:
              'Now advanced enough that developers can build native-quality mobile.',
            speakerNames: ['Ellie Elephant'],
            timeStart: '9:15 am',
            timeEnd: '9:30 am',
            tracks: ['Ionic'],
            id: '4'
          },
          {
            name: 'Getting Started with Ionic',
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
            name: 'Ionic Tooling',
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
            name: 'University of Ionic',
            location: 'Hall 3',
            description:
              'Now advanced enough that developers can build native-quality mobile.',
            speakerNames: ['Ellie Elephant'],
            timeStart: '9:15 am',
            timeEnd: '9:30 am',
            tracks: ['Ionic'],
            id: '4'
          },
          {
            name: 'Getting Started with Ionic',
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
            name: 'Ionic Tooling',
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
            name: 'University of Ionic',
            location: 'Hall 3',
            description:
              'Now advanced enough that developers can build native-quality mobile.',
            speakerNames: ['Ellie Elephant'],
            timeStart: '9:15 am',
            timeEnd: '9:30 am',
            tracks: ['Ionic'],
            id: '4'
          },
          {
            name: 'Getting Started with Ionic',
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
            name: 'Ionic Tooling',
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
            name: 'University of Ionic',
            location: 'Hall 3',
            description:
              'Now advanced enough that developers can build native-quality mobile.',
            speakerNames: ['Ellie Elephant'],
            timeStart: '9:15 am',
            timeEnd: '9:30 am',
            tracks: ['Ionic'],
            id: '4'
          },
          {
            name: 'Getting Started with Ionic',
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
            name: 'Ionic Tooling',
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
            name: 'University of Ionic',
            location: 'Hall 3',
            description:
              'Now advanced enough that developers can build native-quality mobile.',
            speakerNames: ['Ellie Elephant'],
            timeStart: '9:15 am',
            timeEnd: '9:30 am',
            tracks: ['Ionic'],
            id: '4'
          },
          {
            name: 'Getting Started with Ionic',
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
            name: 'Ionic Tooling',
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
            name: 'University of Ionic',
            location: 'Hall 3',
            description:
              'Now advanced enough that developers can build native-quality mobile.',
            speakerNames: ['Ellie Elephant'],
            timeStart: '9:15 am',
            timeEnd: '9:30 am',
            tracks: ['Ionic'],
            id: '4'
          }
        ]
      }
    ];
  }

  presentFilter() {}

  updateSchedule() {}

  openSocial() {}

  addFavorite() {}

  removeFavorite() {}
}
