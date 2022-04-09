import { TestBed } from '@angular/core/testing';

import { FilmservicesService } from './filmservices.service';

describe('FilmservicesService', () => {
  let service: FilmservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
