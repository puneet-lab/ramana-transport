import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {
  IALlQuestions,
  IInductionStep,
  InductionLinkType,
} from '../shared-components/model';

@Injectable({
  providedIn: 'root',
})
export class InductionService {
  constructor(private aFirestore: AngularFirestore) {}

  inductionSteps: IInductionStep[];
  currentStep = 1;

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
    const inductionTypes = [
      InductionLinkType.STANDARD_BEHAVIOR,
      InductionLinkType.ANTI_DISCRIMINATION_HARASSEMENT,
      InductionLinkType.HEALTH_AND_SAFETY,
      InductionLinkType.FATIGUE_MANAGEMENT,
      InductionLinkType.LOAD_SECURITY,
      InductionLinkType.BASE_ENTRY,
    ];
    this.inductionSteps = inductionTypes.map(
      (inductionType, index) =>
        ({
          step: index + 1,
          inductionType,
        } as IInductionStep)
    );
    console.log(
      'InductionService -> setInductionStep -> this.inductionSteps',
      this.inductionSteps
    );
  }

  saveData() {
    const data = {
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
    }
  }
}
