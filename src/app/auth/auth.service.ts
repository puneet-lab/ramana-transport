import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { auth } from 'firebase/app';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;
  // tslint:disable-next-line: variable-name
  private _isSignedIn: boolean;

  get isSignedIn(): boolean {
    return this._isSignedIn;
  }
  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user: User) => {
      if (user) {
        console.log('User signed in :>> ');
        this._isSignedIn = true;
      } else {
        console.log('User not signed in :>> ');
        this._isSignedIn = false;
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
