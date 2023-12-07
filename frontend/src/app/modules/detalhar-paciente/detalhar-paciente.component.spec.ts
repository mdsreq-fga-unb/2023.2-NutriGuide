import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharPacienteComponent } from './detalhar-paciente.component';

describe('DetalharPacienteComponent', () => {
  let component: DetalharPacienteComponent;
  let fixture: ComponentFixture<DetalharPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalharPacienteComponent]
    });
    fixture = TestBed.createComponent(DetalharPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
