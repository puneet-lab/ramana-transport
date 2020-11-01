import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { auth } from 'firebase/app';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;
  // tslint:disable-next-line: variable-name
  private _isSignedIn = false;
  private isSignedIn = new BehaviorSubject(this._isSignedIn);
  isSignedIn$ = this.isSignedIn.asObservable();
  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user: User) => {
      if (user) {
        this.isSignedIn.next(true);
      } else {
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
    await auth().signOut();
    console.log('Youve been signed out!');
  }
}
