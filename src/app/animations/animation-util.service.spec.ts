import { TestBed } from '@angular/core/testing';

import { AnimationUtilService } from './animation-util.service';

describe('AnimationUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimationUtilService = TestBed.get(AnimationUtilService);
    expect(service).toBeTruthy();
  });
});
