import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagesLinkType } from 'src/app/shared-components/model';
import { InductionService } from '../induction.service';

@Component({
  selector: 'pk-ramana-transport-induction-detail',
  templateUrl: './induction-detail.component.html',
  styleUrls: ['./induction-detail.component.scss'],
})
export class InductionDetailComponent implements OnInit {
  constructor(
    private router: Router,
    private inductionService: InductionService
  ) {}

  ngOnInit(): void {}

  goToInductionTestDetails() {
    const routeInductionTestDetail = PagesLinkType.INDUCTION_TEST_DETAILS;
    this.router.navigate([routeInductionTestDetail]);
  }
}
