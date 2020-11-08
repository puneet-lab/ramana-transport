import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { forOwn } from 'lodash';
import {
  IUser,
  PagesLinkType,
  UserStatusType,
} from 'src/app/shared-components/model';
import { PhoneNumberValidators } from './phoneNumber.validator';
import {
  userDetailErrorMessage,
  userDetailValidationMessage,
} from './user-detail-msg.validation';
import { UserDetailService } from './user-detail.service';
@Component({
  selector: 'pk-ramana-transport-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private userDetailService: UserDetailService,
    private router: Router
  ) {}

  userDetailForm: FormGroup;
  validationMessages = userDetailValidationMessage;
  userDetailErrorMessage = userDetailErrorMessage;
  isLoading = false;
  loadingText = 'Loading...';
  userID: string = null;

  ngOnInit(): void {
    this.userID = this.getUserID();
    this.clearErrorMessages();
    this.initiateUserDetails();
  }

  clearErrorMessages() {
    for (const key in userDetailErrorMessage) {
      if (Object.prototype.hasOwnProperty.call(userDetailErrorMessage, key)) {
        userDetailErrorMessage[key] = null;
      }
    }
  }

  getUserID(): string {
    const uniqueNumber = Math.floor(new Date().valueOf() * Math.random());
    return `user_${uniqueNumber}`;
  }

  initiateUserDetails() {
    this.userDetailForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobileNo: [null, [PhoneNumberValidators.phoneInitial()]],
      altMobileNo: [null, [PhoneNumberValidators.phoneInitial()]],
      address: ['', [Validators.required]],
    });
  }

  onSaveUserDetails() {
    if (this.userDetailForm.valid) {
      this.saveUserDetails();
    } else {
      this.showUserDetailError();
    }
  }

  async saveUserDetails() {
    const userDataValue: IUser = this.userDetailForm.value;
    const userID = this.userID;
    const userDetailsData = {
      userID,
      ...userDataValue,
      status: UserStatusType.NEW,
      createdAt: new Date(),
    };
    const isSaved = await this.userDetailService.saveUserDetailsData(
      userDetailsData
    );
    if (isSaved) {
      this.router.navigate([PagesLinkType.INDUCTION_DETAILS]);
    } else {
      //TODO :: remove alert
      alert('Not able to save details. Try Later');
    }
  }

  showUserDetailError() {
    const userDetailFormControls = this.userDetailForm.controls;
    forOwn(userDetailFormControls, (control: AbstractControl, key: string) => {
      this.setErrorMessageOnSubmit(control, key);
    });
  }

  setErrorMessageOnSubmit(c: AbstractControl, controlName: string): void {
    if (c.errors) {
      const validationData = this.validationMessages.find(
        (validation) => validation.control === controlName
      );
      const validationRules = validationData.rules;
      const errorMessage = Object.keys(c.errors)
        .map((key) => validationRules[key])
        .join('<br>');
      const errorProperty = `${controlName}ValidationMessage`;
      this.userDetailErrorMessage[errorProperty] = errorMessage;
    }
  }
}
