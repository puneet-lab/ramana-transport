import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InductionTestDetailsComponent } from './induction-test-details.component';

describe('InductionTestDetailsComponent', () => {
  let component: InductionTestDetailsComponent;
  let fixture: ComponentFixture<InductionTestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InductionTestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InductionTestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
