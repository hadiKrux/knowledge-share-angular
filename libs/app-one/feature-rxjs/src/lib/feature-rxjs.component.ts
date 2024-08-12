import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BehaviorSubject,
  concatMap,
  delay,
  exhaustMap,
  from,
  map,
  mergeMap,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserService } from '@ka/app-one-data-access';

@Component({
  selector: 'ka-feature-rxjs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-rxjs.component.html',
})
export class FeatureRxjsComponent implements OnInit {
  // private _destroyRef = inject(DestroyRef);
  private _userService = inject(UserService);

  public records = [
    { id: 1, name: 'Record 1' },
    { id: 2, name: 'Record 2' },
    { id: 3, name: 'Record 3' },
  ];

  public records$ = of(this.records);
  // transform
  // pipe(map((records) => records.map((record) => record.name)));

  public username$ = new BehaviorSubject<string>('no username');

  ngOnInit(): void {
    this.getRecords();
    // this.behaviorSubject();
    // this.operators();
  }

  getRecords() {
    // destroy ref
    // pipe(takeUntilDestroyed(this._destroyRef))

    this.records$.subscribe({
      next: (value) => console.log(value),
      error: (error) => console.error(error),
    });
  }

  behaviorSubject() {
    this.username$.subscribe({
      next: (value) => console.log(value),
      error: (error) => console.error(error),
    });

    // setTimeout(() => {
    //   this.username$.next('John doe');
    // }, 3000);
  }

  operators() {
    const source$ = from([1, 2, 3, 4, 5]);

    const fn = (operator: any) => {
      return () => {
        source$
          .pipe(operator((x: number) => of(x).pipe(delay(1000))))
          .subscribe({
            next: (value) => console.log(value),
            error: (error) => console.error(error),
            complete: () => console.log(`${operator.name} completed`),
          });
      };
    };

    // fn(mergeMap)();

    // mergeMap - for every 1,2,3,4,5 it will create a new observable and merge them together with delay of 1s
    // concatMap - it will wait for the previous observable to complete before creating a new one, mergeMap will not wait
    // switchMap - it will cancel the previous observable and create a new one
    // exhaustMap - it will ignore all new observables until the previous one is

    // example
    // this._userService
    //   .getUser()
    //   .pipe(concatMap((user) => this._userService.getUserDetails(user.id)))
    //   .subscribe({
    //     next: (value) => console.log(value),
    //   });

    // switchMap also works because we don't care about the previous observable
    // switchMap would be a perfect place to use if you are using search input and you want to cancel the previous search
  }
}
