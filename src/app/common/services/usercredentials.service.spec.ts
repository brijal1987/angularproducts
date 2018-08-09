import { TestBed, inject } from '@angular/core/testing';

import { UsercredentialsService } from './usercredentials.service';

describe('UsercredentialsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsercredentialsService]
    });
  });

  it('should be created', inject([UsercredentialsService], (service: UsercredentialsService) => {
    expect(service).toBeTruthy();
  }));
});
