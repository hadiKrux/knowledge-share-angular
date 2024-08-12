import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface IMenu {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  data(): Observable<IMenu[]> {
    return of([
      {
        name: 'Signal',
        url: 'signal',
      },
      {
        name: 'RxJS',
        url: 'rxjs',
      },
      {
        name: 'Store',
        url: 'store',
      },
      {
        name: 'Functional vs Presentational',
        url: 'functional-vs-presentational',
      },
      {
        name: 'Test',
        url: 'test',
      },
    ]);
  }
}
