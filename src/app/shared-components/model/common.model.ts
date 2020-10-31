export enum AppName {
  APP_NAME = 'Ramana Transport',
}

export enum PagesLinkType {
  LOGIN = 'login',
  USER_DETAILS = 'user-details',
  INDUCTION = 'induction',
  INDUCTION_DETAILS = 'induction_details',
  INDUCTION_TEST_DETAILS = 'induction_test_details',
}

export enum InductionLinkType {
  STANDARD_BEHAVIOR = 'standard_behavior',
  ANTI_DISCRIMINATION_HARASSEMENT = 'anti_discrimination_and_harassement',
  HEALTH_AND_SAFETY = 'health_and_safety',
  FATIGUE_MANAGEMENT = 'fatigue_management',
  LOAD_SECURITY = 'load_security',
  DISTRACTIONS = 'distractions',
  BASE_ENTRY = 'base_entry',
}

export interface IUser {
  userID: string;
  firstName: string;
  lastName: string;
  mobileNo: string;
  altMobileNo: string;
  address: string;
  createdAt: Date;
}
