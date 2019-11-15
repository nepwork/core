import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrganizePage } from './organize.page';

describe('OrganizePage', () => {
  let component: OrganizePage;
  let fixture: ComponentFixture<OrganizePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
