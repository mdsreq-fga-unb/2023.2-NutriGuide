import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarNutricionistasComponent } from './consultar-nutricionistas.component';

describe('ConsultarNutricionistasComponent', () => {
  let component: ConsultarNutricionistasComponent;
  let fixture: ComponentFixture<ConsultarNutricionistasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarNutricionistasComponent]
    });
    fixture = TestBed.createComponent(ConsultarNutricionistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
