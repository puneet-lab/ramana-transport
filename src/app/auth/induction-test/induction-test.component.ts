import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pk-ramana-transport-induction-test',
  templateUrl: './induction-test.component.html',
  styleUrls: ['./induction-test.component.scss'],
})
export class InductionTestComponent implements OnInit {
  currentTest: string;
  constructor(private router: Router, private route: ActivatedRoute) {
    const currentTest = this.route.snapshot.paramMap
      .get('type')
      .toString()
      .trim();
  }

  ngOnInit(): void {}
}
