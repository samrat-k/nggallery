import { TestBed, inject } from '@angular/core/testing';

import { SlidsService } from './slids.service';

describe('SlidsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlidsService]
    });
  });

  it('should be created', inject([SlidsService], (service: SlidsService) => {
    expect(service).toBeTruthy();
  }));
});
