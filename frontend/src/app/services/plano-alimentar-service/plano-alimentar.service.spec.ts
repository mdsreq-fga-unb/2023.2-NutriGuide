import { TestBed } from '@angular/core/testing';

import { PlanoAlimentarService } from './plano-alimentar.service';

describe('PlanoAlimentarService', () => {
  let service: PlanoAlimentarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanoAlimentarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
