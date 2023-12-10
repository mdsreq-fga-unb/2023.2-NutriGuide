import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarEmailComponent } from './enviar-email.component';

describe('EnviarEmailComponent', () => {
  let component: EnviarEmailComponent;
  let fixture: ComponentFixture<EnviarEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnviarEmailComponent]
    });
    fixture = TestBed.createComponent(EnviarEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
