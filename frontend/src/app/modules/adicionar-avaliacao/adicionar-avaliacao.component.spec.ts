import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarAvaliacaoComponent } from './adicionar-avaliacao.component';

describe('AdicionarAvaliacaoComponent', () => {
  let component: AdicionarAvaliacaoComponent;
  let fixture: ComponentFixture<AdicionarAvaliacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarAvaliacaoComponent]
    });
    fixture = TestBed.createComponent(AdicionarAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
