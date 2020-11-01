import { IInductionStep, InductionLinkType, PagesLinkType } from '../model';

export const getInductionURL = (type: InductionLinkType): string => {
  console.log('type', type);
  if (!type) {
    throw new Error('Please provide induction type');
  }
  return `${PagesLinkType.INDUCTION}/${type}`;
};

export const getInductionStepByInductionStep = (
  allInductionStep: IInductionStep[],
  id: number
): IInductionStep => {
  return allInductionStep.find((step) => step.step === id);
};

export const getInductionStepByInductionType = (
  allInductionStep: IInductionStep[],
  type: InductionLinkType
): IInductionStep => {
  return allInductionStep.find((step) => step.inductionType === type);
};
