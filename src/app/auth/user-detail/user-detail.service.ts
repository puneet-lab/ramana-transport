import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IUser } from 'src/app/shared-components/model';

@Injectable({
  providedIn: 'root',
})
export class UserDetailService {
  constructor(public aFirestore: AngularFirestore) {}
  // tslint:disable-next-line: variable-name
  private _userID = null;
  get userID() {
    return this._userID;
  }
  async saveUserDetailsData(userDetails: IUser): Promise<boolean> {
    try {
      const { userID } = userDetails;
      await this.aFirestore
        .collection<IUser>('users')
        .doc(userID)
        .set(userDetails);
      this._userID = userID;
      return true;
    } catch (error) {
      this._userID = null;
      return false;
    }
  }
}
