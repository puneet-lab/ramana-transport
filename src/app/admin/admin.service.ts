import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IUser } from '../shared-components/model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private aFirestore: AngularFirestore) {}

  getUserList(): Observable<IUser[]> {
    try {
      return this.aFirestore
        .collection('users', (ref) => ref.orderBy('createdAt', 'desc'))
        .valueChanges() as Observable<IUser[]>;
    } catch (error) {
      console.log('Admin -> getUserList -> error', error);
    }
  }

  async deleteUser(userID: string): Promise<boolean> {
    try {
      this.aFirestore.collection('users').doc(userID).delete();
      return true;
    } catch (error) {
      console.log('deleteUser ~ error', error);
      return false;
    }

    //throw new Error('Method not implemented.');
  }
}
