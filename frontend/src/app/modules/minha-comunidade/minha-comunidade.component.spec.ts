import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaComunidadeComponent } from './minha-comunidade.component';

describe('MinhaComunidadeComponent', () => {
  let component: MinhaComunidadeComponent;
  let fixture: ComponentFixture<MinhaComunidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinhaComunidadeComponent]
    });
    fixture = TestBed.createComponent(MinhaComunidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
