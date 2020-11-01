import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStatusType } from 'src/app/shared-components/model';
import { InductionService } from '../induction.service';
import { UserDetailService } from '../user-detail/user-detail.service';

@Component({
  selector: 'pk-ramana-transport-induction-finish',
  templateUrl: './induction-finish.component.html',
  styleUrls: ['./induction-finish.component.scss'],
})
export class InductionFinishComponent implements OnInit {
  constructor(
    private userDetailService: UserDetailService,
    private inductionService: InductionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inductionService.isUserExists();
    const userID = this.userDetailService.getUserIDFromLocalStorage();
    if (userID) {
      this.getUserDetails(userID);
      this.updateUserStatus(userID);
      this.userDetailService.setUserIdToLocalStorage('');
    }
  }

  getUserDetails(userID: string) {
    this.userDetailService.getUserByID(userID).subscribe((user) => {});
  }
  updateUserStatus(userID: string) {
    const status = UserStatusType.FINISHED as string;
    this.userDetailService.updateUserData(userID, 'status', status);
  }
}
