import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarProgressoComponent } from './registrar-progresso.component';

describe('RegistrarProgressoComponent', () => {
  let component: RegistrarProgressoComponent;
  let fixture: ComponentFixture<RegistrarProgressoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarProgressoComponent]
    });
    fixture = TestBed.createComponent(RegistrarProgressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
