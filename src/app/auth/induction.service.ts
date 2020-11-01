import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  IALlQuestions,
  IInductionStep,
  InductionLinkType,
  PagesLinkType,
} from '../shared-components/model';
import { UserDetailService } from './user-detail/user-detail.service';
const inductionTypes = [
  {
    type: InductionLinkType.STANDARD_BEHAVIOR,
    label: 'Standard behaviour',
  },
  {
    type: InductionLinkType.ANTI_DISCRIMINATION_HARASSEMENT,
    label: 'Anti-discrimination and anti-harassment',
  },
  {
    type: InductionLinkType.HEALTH_AND_SAFETY,
    label: 'Health & Safety',
  },
  {
    type: InductionLinkType.FATIGUE_MANAGEMENT,
    label: 'Fatigue management',
  },
  {
    type: InductionLinkType.LOAD_SECURITY,
    label: 'Load security',
  },
  {
    type: InductionLinkType.DISTRACTIONS,
    label: 'Distractions while driving',
  },
  {
    type: InductionLinkType.BASE_ENTRY,
    label: 'Base entry guidelines',
  },
];
@Injectable({
  providedIn: 'root',
})
export class InductionService {
  constructor(
    private aFirestore: AngularFirestore,
    private userDetailService: UserDetailService,
    private router: Router
  ) {}

  inductionSteps: IInductionStep[];

  getInductionQuestions(type: InductionLinkType): Observable<IALlQuestions> {
    try {
      return this.aFirestore
        .collection('induction')
        .doc(type)
        .valueChanges() as Observable<IALlQuestions>;
    } catch (error) {
      console.log('InductionService -> getInductionQuestions -> error', error);
    }
  }

  setInductionStep() {
    this.inductionSteps = inductionTypes.map(
      (inductionType, index) =>
        ({
          step: index + 1,
          inductionType: inductionType.type,
          label: inductionType.label,
        } as IInductionStep)
    );
  }
  isUserExists() {
    const userID = this.userDetailService.getUserIDFromLocalStorage();
    if (userID === null || userID === undefined || userID?.length === 0) {
      this.router.navigate([PagesLinkType.LOGIN]);
    }
  }

  saveData() {
    /* const data = {
      allQuestions: [
        {
          Question: 'What is the maximum speed in yard?',
          Options: [
            { value: 'A', label: '10km per hour', order: 1 },
            { value: 'B', label: 'Up to 10km per hour', order: 2 },
            { value: 'C', label: '9 km per hour', order: 3 },
          ],
          id: 1,
          Answer: 'C',
        },
        {
          Question: '',
          Options: [
            {
              value: 'A',
              label: 'Park anywhere and leave as you are already very late',
              order: 1,
            },
            {
              value: 'B',
              label:
                'Park where other trucks would not get struck in the morning',
              order: 2,
            },
            {
              value: 'C',
              label:
                'Park in front of the trucks as they grabbed your parking, you keep them struck in the morning.',
              order: 3,
            },
          ],
          id: 2,
          Answer: 'B',
        },
      ],
    };
    try {
      const x = this.aFirestore
        .collection('induction')
        .doc(InductionLinkType.BASE_ENTRY)
        .set(data);
    } catch (error) {
      console.log('InductionService -> saveData -> error', error);
    } */
  }
}
