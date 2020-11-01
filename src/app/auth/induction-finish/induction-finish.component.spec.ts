import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InductionFinishComponent } from './induction-finish.component';

describe('InductionFinishComponent', () => {
  let component: InductionFinishComponent;
  let fixture: ComponentFixture<InductionFinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InductionFinishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InductionFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
