import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface IUser {
  id: number;
  name: string;
}

interface IUserDetail {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUser(): Observable<IUser> {
    return of({ id: 1, name: 'John Doe' });
  }

  getUserDetails(userId: number): Observable<IUserDetail> {
    return of({
      id: userId,
      name: 'John Doe',
      email: 'john@gmail.com',
      phone: '1234567890',
      address: '123 Main St',
    });
  }
}
