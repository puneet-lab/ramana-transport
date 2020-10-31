import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getInductionURL } from 'src/app/shared-components';
import { InductionLinkType } from 'src/app/shared-components/model';

@Component({
  selector: 'pk-ramana-transport-induction-test-details',
  templateUrl: './induction-test-details.component.html',
  styleUrls: ['./induction-test-details.component.scss'],
})
export class InductionTestDetailsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToInductionTest() {
    const testUrl = getInductionURL(InductionLinkType.STANDARD_BEHAVIOR);
    this.router.navigate([testUrl]);
  }
}
