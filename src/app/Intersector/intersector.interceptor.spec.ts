import { TestBed } from '@angular/core/testing';

import { IntersectorInterceptor } from './intersector.interceptor';

describe('IntersectorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      IntersectorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: IntersectorInterceptor = TestBed.inject(IntersectorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
