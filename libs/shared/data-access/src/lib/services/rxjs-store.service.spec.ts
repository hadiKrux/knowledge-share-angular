import { TestBed } from '@angular/core/testing';

import { RxjsStoreService } from './rxjs-store.service';
import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash';

interface IMockStore {
  test: string;
  another: number;
}

const initialState = { test: 'hello', another: 1 };

@Injectable({
  providedIn: 'root',
})
export class MockRxjsStoreService extends RxjsStoreService<IMockStore> {
  protected override storeData: IMockStore = cloneDeep(initialState);

  constructor() {
    super();

    this.initStore();
  }
}

describe('RxjsStoreService', () => {
  let service: MockRxjsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockRxjsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize store', (done) => {
    expect(service['stateSubject$']).toBeDefined();

    service['stateSubject$'].subscribe(() => {
      done();
    });
  });

  it('should get state$', (done) => {
    service['state$'].subscribe(() => {
      done();
    });
  });

  it('should get plain state', () => {
    const state = service['state'];

    expect(state).toStrictEqual(initialState);
  });

  it('should broadcast state changes', (done) => {
    const newState = { test: '1', another: 222 };
    service['state$'].subscribe((r) => {
      expect(r).toStrictEqual(newState);
      done();
    });

    service.setState(newState);
  });

  it('should select part of state and subscribe', (done) => {
    service
      .select$((state) => state.test)
      .subscribe((r) => {
        expect(r).toBe('x');
        done();
      });

    service.set('test', 'x');
  });
});
