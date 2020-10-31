import { InductionLinkType, PagesLinkType } from '../model';

export const getInductionURL = (type: InductionLinkType): string => {
  if (!type) {
    throw new Error('Please provide induction type');
  }
  return `${PagesLinkType.INDUCTION}/${type}`;
};
