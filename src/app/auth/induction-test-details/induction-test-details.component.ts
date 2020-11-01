import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  IInductionStep,
  InductionLinkType,
} from 'src/app/shared-components/model';
interface IDialogContent {
  title: string;
  content: string;
  image: string;
}
@Component({
  selector: 'pk-ramana-transport-induction-test-details',
  templateUrl: './induction-test-details.component.html',
  styleUrls: ['./induction-test-details.component.scss'],
})
export class InductionTestDetailsComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<InductionTestDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { inductionType: IInductionStep }
  ) {
    this.inductionType = data?.inductionType;
  }
  inductionType: IInductionStep;
  allInductionTypes = InductionLinkType;

  standardBehaviorData: IDialogContent[];

  healthAndSafetyData: IDialogContent[];

  fatiqueData: IDialogContent[];

  ngOnInit(): void {
    this.setStandardBehaviourData();
    this.setHealthSafetyData();
    this.setFatiqueData();
  }

  onCloseDialog() {
    this.dialogRef.close();
  }

  setFatiqueData() {
    this.fatiqueData = [
      {
        title: 'What is fatigue?',
        content: `
        We often see the big billboards on the motorway ‘fatigue kills’, as I want to let you know that fatigue single headedly kills 300 people on a yearly basis in Australia, so you take it very seriously. Most of use ignore just because we do not want to stop or missing schedules but in case a driver goes to sleep on steering wheel then the results can be catastrophic for the several families
        `,
        image: '',
      },
      {
        title: 'Cause',
        content: `
        There are several reason which can cause fatigue and some of them we can discuss very quickly here;
        `,
        image: '',
      },
      {
        title: 'Poor sleeping habits- ',
        content: `Can be caused by partying too hard, presence of children or too many family members disturbing sleep, some kind of depression or anxiety can cause insomnia. `,
        image: '',
      },
      {
        title: 'Poor driving conditions- ',
        content: `when the vehicle is fitted without Air Conditioner/ heating system, no stereo or too much silence in the cab, too much noisy can cause brain fades, unclean and dirty cabin can generate boredom feeling
        `,
        image: '',
      },
      {
        title: 'Long working hours- ',
        content: `sometimes schedulers push drivers too hard to meet deadlines, as a result long driving can be necessary, which also can cause drowsiness.
        `,
        image: '',
      },
      {
        title: 'Poor driver health- ',
        content: `sometimes driving in unknown very mild temperatures or mildly low blood pressure can also cause dizziness which can result in fatigue, unknown medicines with strong drugs can also cause fatigue.
        <br><br>These are some signs of fatigue;<br>
        1. Yawning<br>
        2. Poor concentration<br>
        3. Tired eyes<br>
        4. Restlessness<br>
        5. Drowsiness<br>
        6. Slow reactions<br>
        7. Boredom<br>
        8. Oversteering<br><br>
        `,

        image: '/assets/fatique1.png',
      },
      {
        title: 'Tips not to fall asleep on wheel ',
        content: `   Whenever as a driver feeling any of these one or more symptoms, please read some useful tips following;<br><br>
        1. Good night sleep can always help in the first place from fatigue.<br>
        2. NO alcohol & drugs use the night before driving.<br>
        3. If taking any medication, please inform your allocator/fleet manager. Double check with doctor if it would have any    affect . while you driving. <br>
        4. Take regular rest breaks.<br>
        5. Small naps can always help when feeling drowsiness.<br>
        6. If possible avoid driving around the usual sleep time.<br>
        7. If feeling sleepy, pull over, get out of truck to get some fresh air, exercising or stretching can always help to go away the boredom or dizziness.<br>`,
        image: '',
      },
    ];
  }

  setHealthSafetyData() {
    this.healthAndSafetyData = [
      {
        title: ' Pre-starts and breakdowns- ',
        content: ` Every morning all drivers are required to
        do a pre start on the truck before moving it. When truck is started
        it takes time to build pressure that time can be utilised to do a
        pre check as it includes; 1. working indicators, horn working and
        all lights<br />
        2. brake test, tyres and nuts in sound condition<br />
        3. Air Conditioner/heating system working <br />
        4. Fluid levels<br />
        5. Windshield, wipers and mirrors<br />
        6. Trailer coupling(if combination vehicle)<br />
        7. Clear the cab of trash and debris<br />
        8. Visual check-up around the truck. <br />
        9. Safety and first-aid equipment<br />
        Any fails should be reported immediately to allocator or fleet
        manager. Breakdowns should be reported immediately to allocators/
        schedulers/ fleet manager as they have work planned for you ahead,
        whenever in this kind of situation, let them know the condition and
        estimated time to back on the road. Also if breakdown is a hazard to
        the ongoing traffic report it to traffic control immediately so they
        can organise help for you.`,
        image: '/assets/health2.png',
      },
      {
        title: 'Mass and dimensions- ',
        content: `Mass and dimensions- overall mass and dimension can be found better in this link, please refer to this link. As particularly are explained further;
        <a href="https://www.nhvr.gov.au/files/201707-0577-common-heavy-freight-vehicles-combinations.pdf">https://www.nhvr.gov.au/files/201707-0577-common-heavy-freight-vehicles-combinations.pdf</a>
        Overweight-At any time we must not carry overweight allowed on the specified vehicle. Always be aware of the weight capacity of your vehicle. For load weight, check for the paperwork, and if unsure ask assistance from the customer but make sure to check the weight before leaving the company. `,
        image: '',
      },
      {
        title: 'Dimensions- ',
        content: `a driver or operator of the vehicle must be aware of the height of vehicle. Anytime for a typical truck maximum height is 4.3m and 2.5m width, if extra wide item then ‘OVERSIZE’ stickers with proper flashing lights and flags are required, that can be done up to 3.5m. A specified overhang for each particular truck is allowed sometimes according to the chassis measurements, please refer to the fleet manager to obtain all the information about the vehicle.
        Provide axle weights
        `,
        image: '',
      },
      {
        title: 'Manual handling-',
        content: `
        Whenever picking up/dropping off something heavy from the ground, always remember to bend you knees, keep the back straight and firm hands. This would provide comfort in the long run, as due to laziness mostly people layover and pick up stuff rather than bending knees, which slowly damage the back and even could be an instant damage to back tissues, muscle pull overs and even spinal cord injuries. Maximum weight allowed per person is 25 kilograms.
        `,
        image: '/assets/health3.png',
      },
    ];
  }

  setStandardBehaviourData() {
    this.standardBehaviorData = [
      {
        title: 'PPE (personal protective equipment) - ',
        content:
          'it is compulsory for every driver to attain standard PPE at all times when on job. Every driver is responsible for his/her own safety and responsible for their and surrounding well-being. Always remember that after finishing a day at work every person want to go home safely, so it is a duty to keep yourself and everyone around you safe. General PPE includes these items and have to be present with every employee when commencing a day work.',
        image: '',
      },
      {
        title: 'High-visibility clothing- ',
        content:
          'it keeps the person highlighted even in unfavourable conditions. Every year 11,000 accidents are caused by un-notification, where movable equipment was operating. So whenever out of vehicle please ensure that you are wearing high-visibility clothing.',
        image: '',
      },
      {
        title: 'Steel cap shoes-',
        content:
          'As a driver we visit many unknown worksites in a typical day as it’s said ‘we do not know what we are stepping in’ so to give yourself a safety upper hand always use safety shoes. It saves a person from any tipping, dropping and chemical hazard. Every work-site in Australia requires safety shoes when present on-site.',
        image: '',
      },
      {
        title: 'Eyewear- ',
        content:
          'Different type of products require accordingly PPE, many companies who deal in chemical manufacturing, glass manufacturing or handing require eyewear for safety. It is responsibility of every driver to keep safety glasses in vehicle all the time.',
        image: '',
      },
      {
        title: 'Gloves- ',
        content:
          'protect our hand from unnecessary substance like grease, chemicals and etcetera, also they give more firm grip to handle straps and chain webbings. So we recommend drivers to use gloves at work.',
        image: '',
      },
      {
        title: 'Hard hat (if required) -',
        content:
          'some companies can ask drivers to wear hard hats when on site and out of vehicle, it could be the companies who deal with construction and buildings or overhead working cranes. Hard saves a person from any overhead hazard. ',
        image: '',
      },
      {
        title: 'Full sleeve and long pants-',
        content:
          'Full sleeve and long pants- many companies which manufacture or handle chemicals, fertilizers and pesticides can ask drivers to wear full sleeve shirt and long pants, as it is our duty to comply with company’ WHS policy. Every driver must have a full sleeve shirt and a long pant present in the vehicle if they want to wear shorts or half sleeves.',
        image: '/assets/standard1.png',
      },
      {
        title: 'Alcohol & drug policy- ',
        content:
          'Ramana Transport allow zero percent tolerance to driving under any alcohol & drug influence. Every driver must do a self-analysis of him/her self before commencing work that if they are in position to drive a heavy machinery on the road? If anyone feel like he/she had too many drinks last nights and still are under the influence they MUST communicate with the allocator and the fleet manager. Prescribed drugs should also be declared to the fleet manager. There is NO SMOKING policy in vehicles, so every driver refrain him/herself from smoking in the vehicle, not even electric cigarettes. We want to notify all drivers that Ramana Transport can ask any driver anytime they are on job for a random drug and alcohol test. ',
        image: '/assets/standard2.png',
      },
      {
        title: 'Accident notification-',
        content:
          'In case of an accident, firstly please check if anyone is injured or hurt, if yes, straightaway call for ambulance, if you are in stable situation ask the person on the other end if they need any assistance or any kind of help. Secondly, every driver of Ramana Transport is liable to declare any accident or major miss-hit to the manager. It does not matter that company driver is at fault or not but company should be notified immediately.',
        image: '',
      },
      {
        title: 'Licence suspension/cancellation-',
        content:
          'For any reason if a driver’s licence is cancelled or suspended, company should be notified immediately.  We DO NOT want any driver to be on the road without a valid driver licence.',
        image: '',
      },
      {
        title: 'Speeding',
        content:
          'Ramana transport do not encourage drivers to speed up vehicles and put your life and other lives at risk. Even if you are behind your schedule, business will close, missing window for another delivery, allocator is pushing hard, whatever is the reason, speeding is NOT THE ANSWER for us. ',
        image: '',
      },
    ];
  }
}

/*

   {
        title: '',
        content: ``,
        image: '',
      },

      */
