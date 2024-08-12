import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MemoryLeakService {
  private _dataSubject = new BehaviorSubject<number[]>([]);
  public data$ = this._dataSubject.asObservable();

  update(value: number[]) {
    this._dataSubject.next([...this._dataSubject.value, ...value]);
  }
}
