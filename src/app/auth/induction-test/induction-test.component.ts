import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forOwn } from 'lodash';
import {
  getInductionStepByInductionStep,
  getInductionStepByInductionType,
  getInductionURL,
} from 'src/app/shared-components';
import {
  InductionLinkType,
  IQuestionOptions,
  IQuestions,
  PagesLinkType,
} from 'src/app/shared-components/model';
import { InductionService } from '../induction.service';
function incorrectAnswer(correctAnswer: string): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    //console.log(' -> correctAnswer', correctAnswer, c.value);
    if (c.value !== null && c.value !== correctAnswer) {
      return { answerincorrect: true };
    } else {
      return null;
    }
  };
}
@Component({
  selector: 'pk-ramana-transport-induction-test',
  templateUrl: './induction-test.component.html',
  styleUrls: ['./induction-test.component.scss'],
})
export class InductionTestComponent implements OnInit {
  isLoading = false;
  loadingText = 'Getting questions...';
  currentTest: string;
  questions: IQuestions[];

  allQuestionsForm: FormGroup;

  validationMessages = {
    required: 'Please select an answer',
    answerincorrect: 'Answer is incorrect. Please try again',
  };

  get allQuestionArray(): FormArray {
    return this.allQuestionsForm.controls.questions as FormArray;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private inductionService: InductionService,
    private fb: FormBuilder
  ) {
    this.route.params.subscribe(async (params) => {
      this.currentTest = params?.type;
      await this.getInductionQuestions();
    });
    this.currentTest = this.route.snapshot.paramMap
      .get('type')
      .toString()
      .trim();
  }

  async ngOnInit(): Promise<void> {
    this.inductionService.setInductionStep();
    await this.getInductionQuestions();
  }

  async getInductionQuestions() {
    this.isLoading = true;
    const inductionTestType = this.currentTest as InductionLinkType;
    const questions$ = this.inductionService.getInductionQuestions(
      inductionTestType
    );
    questions$.subscribe((allQuestions) => {
      const questions = allQuestions?.allQuestions;
      this.questions = questions;
      this.setQuestions(questions);
      this.isLoading = false;
    });
  }

  getQuestionForDisplay(i: number): string {
    const question = this.questions[i];
    return `${question.id}. ${question.Question}`;
  }

  getQuestionOptions(i: number): IQuestionOptions[] {
    const question = this.questions[i];
    return question.Options;
  }

  setQuestions(questions: IQuestions[]) {
    if (!Array.isArray(questions)) {
      throw new Error('Not get the questions');
    }
    this.setQuestionForm(questions);
  }

  setQuestionForm(questions: IQuestions[]) {
    this.allQuestionsForm = this.fb.group({
      questions: this.fb.array([]),
    });
    questions.forEach((question, index) => {
      this.allQuestionArray.push(
        this.fb.group({
          [index]: new FormControl('', [
            Validators.required,
            incorrectAnswer(question.Answer),
          ]),
        })
      );
    });
  }

  onSaveInduction() {
    const isFormValid = this.allQuestionsForm.valid;
    //isFormValid ? this.goToNextStep() : this.showFormError();
    isFormValid ? this.goToNextStep() : this.goToNextStep();
  }

  showFormError() {
    const questionFormGroup = this.allQuestionArray.controls;
    forOwn(questionFormGroup, (group: FormGroup, key: string) => {
      const control = group.get(key);
      this.setErrorMessageOnSubmit(control, key);
    });
  }

  setErrorMessageOnSubmit(c: AbstractControl, controlID: string) {
    const errorMessageID = `errorMessage${controlID}`;
    if (c.errors) {
      const validationData = this.validationMessages;
      const errorMessage = Object.keys(c.errors)
        .map((key) => validationData[key])
        .join('<br>');
      document.getElementById(errorMessageID).innerHTML = errorMessage;
    } else {
      document.getElementById(errorMessageID).innerHTML = null;
    }
  }

  goToNextStep() {
    const allInductionSteps = this.inductionService.inductionSteps;
    const currentInductionStep = getInductionStepByInductionType(
      allInductionSteps,
      this.currentTest as InductionLinkType
    );

    const { step } = currentInductionStep || {};
    if (step === 6) {
      this.goToInductionFinish();
      return;
    }

    const newInductionStep = getInductionStepByInductionStep(
      allInductionSteps,
      step + 1
    );
    const { inductionType } = newInductionStep || {};

    const nextURL = getInductionURL(inductionType);
    this.router.navigate([nextURL]);
  }
  goToInductionFinish() {
    this.router.navigate([PagesLinkType.INDUCTION_FINISHED]);
  }

  saveInductionData(): void {
    this.inductionService.saveData();
  }
}
