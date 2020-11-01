import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PagesLinkType } from 'src/app/shared-components/model';
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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: [
        'transportramana@gmail.com',
        [Validators.required, Validators.email],
      ],
      password: ['123456', Validators.required],
    });
    console.log(
      'LoginComponent -> initLoginForm ->  this.loginForm ',
      this.loginForm
    );
  }

  async onLogin() {
    if (this.loginForm.invalid) {
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
    if (isLogin) {
      this.router.navigate([PagesLinkType.USER_DETAILS]);
    } else {
      // TODO::
      alert('Error in Loggin in, try again later');
    }
    this.isLoading = false;
  }

  onLogout() {
    this.authService.logout();
  }
}
