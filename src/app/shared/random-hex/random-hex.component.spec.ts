import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RandomHexComponent } from './random-hex.component';

describe('RandomHexComponent', () => {
  let component: RandomHexComponent;
  let fixture: ComponentFixture<RandomHexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomHexComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RandomHexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
