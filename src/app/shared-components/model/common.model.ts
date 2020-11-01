export enum AppName {
  APP_NAME = 'Ramana Transport',
}

export enum PagesLinkType {
  LOGIN = 'login',
  HOME = 'home',
  USER_DETAILS = 'user-details',
  INDUCTION = 'induction',
  INDUCTION_DETAILS = 'induction_details',
  INDUCTION_TEST_DETAILS = 'induction_test_details',
  INDUCTION_FINISHED = 'induction_finish',
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
  status: UserStatusType;
  createdAt: Date;
}

export interface IALlQuestions {
  allQuestions: IQuestions[];
}

export interface IQuestions {
  Question: string;
  Options: IQuestionOptions[];
  id: number;
  Answer: string;
}

export interface IQuestionOptions {
  label: string;
  value: string;
  order: number;
}

export interface IInductionStep {
  step: number;
  inductionType: InductionLinkType;
  label: string;
}

export enum UserStatusType {
  NEW = 'NEW',
  STARTED = 'STARTED',
  FINISHED = 'FINISHED',
}
