import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarComentarioComponent } from './enviar-comentario.component';

describe('EnviarComentarioComponent', () => {
  let component: EnviarComentarioComponent;
  let fixture: ComponentFixture<EnviarComentarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnviarComentarioComponent]
    });
    fixture = TestBed.createComponent(EnviarComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
