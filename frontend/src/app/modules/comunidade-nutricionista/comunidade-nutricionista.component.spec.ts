import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidadeNutricionistaComponent } from './comunidade-nutricionista.component';

describe('ComunidadeNutricionistaComponent', () => {
  let component: ComunidadeNutricionistaComponent;
  let fixture: ComponentFixture<ComunidadeNutricionistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComunidadeNutricionistaComponent]
    });
    fixture = TestBed.createComponent(ComunidadeNutricionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
