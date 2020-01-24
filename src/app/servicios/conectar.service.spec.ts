import { TestBed } from '@angular/core/testing';

import { ConectarService } from './conectar.service';

describe('ConectarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConectarService = TestBed.get(ConectarService);
    expect(service).toBeTruthy();
  });
});
