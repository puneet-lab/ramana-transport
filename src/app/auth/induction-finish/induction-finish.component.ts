import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { IUser, UserStatusType } from 'src/app/shared-components/model';
import { AuthService } from '../auth.service';
import { InductionService } from '../induction.service';
import { UserDetailService } from '../user-detail/user-detail.service';
@Component({
  selector: 'pk-ramana-transport-induction-finish',
  templateUrl: './induction-finish.component.html',
  styleUrls: ['./induction-finish.component.scss'],
})
export class InductionFinishComponent implements OnInit {
  user: IUser;
  certificateDate = null;
  constructor(
    private userDetailService: UserDetailService,
    private inductionService: InductionService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.inductionService.isUserExists();
    const userID = this.userDetailService.getUserIDFromLocalStorage();
    if (userID) {
      this.getUserDetails(userID);
      this.updateUserStatus(userID);
    }
  }

  getUserDetails(userID: string) {
    this.userDetailService.getUserByID(userID).subscribe((user) => {
      this.user = user;
      this.certificateDate = new Date();
    });
  }
  updateUserStatus(userID: string) {
    const status = UserStatusType.FINISHED as string;
    this.userDetailService.updateUserData(userID, 'status', status);
  }

  downloadPdf() {
    html2canvas(document.querySelector('#pdf')).then((canvas) => {
      const pdf = new jsPDF('l', 'mm', [canvas.width, canvas.height]);

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      pdf.addImage(imgData, 0, 0, canvas.width, canvas.height);
      pdf.save('certificate_ramana_transport.pdf');
      this.authService.logout();
    });
  }
}
