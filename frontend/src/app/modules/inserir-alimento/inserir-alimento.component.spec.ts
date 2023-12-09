import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirAlimentoComponent } from './inserir-alimento.component';

describe('InserirAlimentoComponent', () => {
  let component: InserirAlimentoComponent;
  let fixture: ComponentFixture<InserirAlimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserirAlimentoComponent]
    });
    fixture = TestBed.createComponent(InserirAlimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
