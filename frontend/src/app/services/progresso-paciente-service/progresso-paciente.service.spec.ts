import { TestBed } from '@angular/core/testing';

import { ProgressoPacienteService } from './progresso-paciente.service';

describe('ProgressoPacienteService', () => {
  let service: ProgressoPacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressoPacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
