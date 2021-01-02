import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { PagesLinkType } from 'src/app/shared-components/model';
import * as env from '../../../environments/environment';
import { AuthService } from '../auth.service';

@Component({
  selector: 'pk-ramana-transport-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  loadingText = 'Loading...';
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBarService: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.authService.isSignedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        const user = firebase.auth().currentUser.email;
        const adminEmail = env.environment.adminEmail;
        user !== adminEmail
          ? this.router.navigate([PagesLinkType.USER_DETAILS])
          : this.router.navigate([PagesLinkType.ADMIN_USER_LIST]);
      }
    });
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  async onLogin() {
    if (this.loginForm.invalid) {
      this.openSnackBar('Please add login details');
      return false;
    }
    this.loadingText = 'Logging you in';
    this.isLoading = true;
    const loginFormValue = this.loginForm.value;
    const { email, password } = loginFormValue;

    const isLogin = await this.authService.loginWithEmailAndPassword(
      email,
      password
    );
    this.onLoginResult(isLogin);
  }

  onLoginResult(isLogin: boolean) {
    const user = firebase.auth().currentUser.email;
    const adminEmail = env.environment.adminEmail;
    if (isLogin) {
      user !== adminEmail
        ? this.router.navigate([PagesLinkType.USER_DETAILS])
        : this.router.navigate(['/admin/user/list']);
    } else {
      this.openSnackBar('Error in Loggin in, check your email id and password');
    }
    this.isLoading = false;
  }

  openSnackBar(text: string) {
    this.snackBarService.open(text);
  }
}
