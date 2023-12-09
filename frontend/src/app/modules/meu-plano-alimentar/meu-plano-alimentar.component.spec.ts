import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPlanoAlimentarComponent } from './meu-plano-alimentar.component';

describe('MeuPlanoAlimentarComponent', () => {
  let component: MeuPlanoAlimentarComponent;
  let fixture: ComponentFixture<MeuPlanoAlimentarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeuPlanoAlimentarComponent]
    });
    fixture = TestBed.createComponent(MeuPlanoAlimentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
