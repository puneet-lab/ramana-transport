import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagesLinkType } from '../shared-components/model';
@Component({
  selector: 'pk-ramana-transport-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToLogin() {
    this.router.navigate([PagesLinkType.LOGIN]);
  }
}
