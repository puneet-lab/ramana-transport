import { Component, OnInit } from '@angular/core';
import { AppName } from '../model';
@Component({
  selector: 'pk-ramana-transport-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  appName = AppName.APP_NAME;
  constructor() {}
  ngOnInit(): void {}
}
