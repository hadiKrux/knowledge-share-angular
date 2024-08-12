import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IBasicStore {
  isLoggedIn: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class BasicStoreService {
  private stateSubject = new BehaviorSubject<IBasicStore>({
    isLoggedIn: false,
  });

  public state$ = this.stateSubject.asObservable();

  updateState(state: Partial<IBasicStore>): void {
    this.stateSubject.next({ ...this.stateSubject.getValue(), ...state });
  }
}
