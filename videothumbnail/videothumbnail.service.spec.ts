import { TestBed } from '@angular/core/testing';

import { VideothumbnailService } from './videothumbnail.service';

describe('VideothumbnailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideothumbnailService = TestBed.get(VideothumbnailService);
    expect(service).toBeTruthy();
  });
});
