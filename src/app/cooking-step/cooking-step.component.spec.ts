import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingStepComponent } from './cooking-step.component';

describe('CookingStepComponent', () => {
  let component: CookingStepComponent;
  let fixture: ComponentFixture<CookingStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookingStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
