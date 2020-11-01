import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getInductionURL } from 'src/app/shared-components';
import {
  IInductionStep,
  InductionLinkType,
  UserStatusType,
} from 'src/app/shared-components/model';
import { InductionService } from '../induction.service';
import { UserDetailService } from '../user-detail/user-detail.service';

@Component({
  selector: 'pk-ramana-transport-induction-detail',
  templateUrl: './induction-detail.component.html',
  styleUrls: ['./induction-detail.component.scss'],
})
export class InductionDetailComponent implements OnInit {
  inductionTypes: IInductionStep[];
  constructor(
    private router: Router,
    private inductionService: InductionService,
    private userDetailService: UserDetailService
  ) {}

  ngOnInit(): void {
    this.inductionService.isUserExists();
    this.inductionService.setInductionStep();
    this.inductionTypes = this.inductionService.inductionSteps;
  }

  goToInductionTest() {
    const userID = this.userDetailService.getUserIDFromLocalStorage();
    this.userDetailService.updateUserData(
      userID,
      'status',
      UserStatusType.STARTED
    );
    const testUrl = getInductionURL(InductionLinkType.STANDARD_BEHAVIOR);
    this.router.navigate([testUrl]);
  }
}
