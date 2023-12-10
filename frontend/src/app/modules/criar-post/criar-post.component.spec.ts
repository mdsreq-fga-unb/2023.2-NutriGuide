import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPostComponent } from './criar-post.component';

describe('CriarPostComponent', () => {
  let component: CriarPostComponent;
  let fixture: ComponentFixture<CriarPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarPostComponent]
    });
    fixture = TestBed.createComponent(CriarPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
