import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InductionDetailComponent } from './induction-detail.component';

describe('InductionDetailComponent', () => {
  let component: InductionDetailComponent;
  let fixture: ComponentFixture<InductionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InductionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InductionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
