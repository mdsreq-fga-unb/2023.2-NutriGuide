import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusPacientesComponent } from './meus-pacientes.component';

describe('MeusPacientesComponent', () => {
  let component: MeusPacientesComponent;
  let fixture: ComponentFixture<MeusPacientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeusPacientesComponent]
    });
    fixture = TestBed.createComponent(MeusPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
