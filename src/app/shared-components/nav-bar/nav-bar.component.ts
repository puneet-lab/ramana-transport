import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { AppName, PagesLinkType } from '../model';
@Component({
  selector: 'pk-ramana-transport-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  appName = AppName.APP_NAME;
  isLoggedIn = false;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isSignedIn$.subscribe((isSignedIn) => {
      this.isLoggedIn = isSignedIn;
    });
  }

  goToHome() {
    this.router.navigate([PagesLinkType.HOME]);
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate([PagesLinkType.HOME]);
  }
}
