import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared-components/model';

@Injectable({
  providedIn: 'root',
})
export class UserDetailService {
  constructor(public aFirestore: AngularFirestore) {}
  // tslint:disable-next-line: variable-name
  // tslint:disable-next-line: variable-name

  async saveUserDetailsData(userDetails: IUser): Promise<boolean> {
    try {
      const { userID } = userDetails;
      await this.aFirestore
        .collection<IUser>('users')
        .doc(userID)
        .set(userDetails);
      this.setUserIdToLocalStorage(userID);
      return true;
    } catch (error) {
      console.log(
        '🚀 ~ file: user-detail.service.ts ~ line 24 ~ UserDetailService ~ saveUserDetailsData ~ error',
        error
      );
      this.setUserIdToLocalStorage('');
      return false;
    }
  }
  setUserIdToLocalStorage(userID: string) {
    localStorage.setItem('ramanaUserID', userID);
  }

  getUserIDFromLocalStorage() {
    const userID = localStorage.getItem('ramanaUserID');
    return userID;
  }

  getUserByID(userID: string): Observable<IUser> {
    return this.aFirestore
      .collection('users')
      .doc(userID)
      .valueChanges() as Observable<IUser>;
  }

  updateUserData(userID: string, userKey: string, userData: string) {
    try {
      this.aFirestore.doc(`users/${userID}`).update({ [userKey]: userData });
    } catch (error) {
      console.log('UserDetailService -> updateUserData -> error', error);
    }
  }
}
