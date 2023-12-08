import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressoPacienteComponent } from './progresso-paciente.component';

describe('ProgressoPacienteComponent', () => {
  let component: ProgressoPacienteComponent;
  let fixture: ComponentFixture<ProgressoPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressoPacienteComponent]
    });
    fixture = TestBed.createComponent(ProgressoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
