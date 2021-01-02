import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { auth } from 'firebase/app';
import { BehaviorSubject } from 'rxjs';
import { UserDetailService } from './user-detail/user-detail.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;
  private _isSignedIn = false;
  private isSignedIn = new BehaviorSubject(this._isSignedIn);
  isSignedIn$ = this.isSignedIn.asObservable();
  constructor(
    public afAuth: AngularFireAuth,
    private userDetailService: UserDetailService
  ) {
    this.afAuth.authState.subscribe((user: User) => {
      if (user) {
        this.user = user;
        this.isSignedIn.next(true);
      } else {
        this.user = null;
        this.isSignedIn.next(false);
      }
    });
  }

  async loginWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<boolean> {
    try {
      const isAuth = await auth().signInWithEmailAndPassword(email, password);
      return true;
    } catch (error) {
      console.error('AUTHERROR::', error);
      return false;
    }
  }

  async logout() {
    this.userDetailService.setUserIdToLocalStorage('');
    await auth().signOut();
    console.log('Youve been signed out!');
  }
}
