import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InductionTestComponent } from './induction-test.component';

describe('InductionTestComponent', () => {
  let component: InductionTestComponent;
  let fixture: ComponentFixture<InductionTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InductionTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InductionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
