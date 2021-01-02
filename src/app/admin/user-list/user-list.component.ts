import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { PagesLinkType } from 'src/app/shared-components/model';
import * as env from '../../../environments/environment';
import { AdminService } from '../admin.service';

@Component({
  selector: 'pk-ramana-transport-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userList$ = this.adminService.getUserList();
  userEmail = firebase.auth().currentUser.email;
  adminEmail = env.environment.adminEmail;
  constructor(
    private adminService: AdminService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.userEmail !== this.adminEmail) {
      this.router.navigate([PagesLinkType.HOME]);
    }
  }

  async deleteUser(userID: string) {
    const result = await this.adminService.deleteUser(userID);
    result
      ? this.snackBar.open('Deleted !')
      : this.snackBar.open('Error in deleting !');
  }
}
