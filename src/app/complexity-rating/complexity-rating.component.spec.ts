import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexityRatingComponent } from './complexity-rating.component';

describe('ComplexityRatingComponent', () => {
  let component: ComplexityRatingComponent;
  let fixture: ComponentFixture<ComplexityRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexityRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexityRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
