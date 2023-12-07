import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesNutricionistaComponent } from './informacoes-nutricionista.component';

describe('InformacoesNutricionistaComponent', () => {
  let component: InformacoesNutricionistaComponent;
  let fixture: ComponentFixture<InformacoesNutricionistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacoesNutricionistaComponent]
    });
    fixture = TestBed.createComponent(InformacoesNutricionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
