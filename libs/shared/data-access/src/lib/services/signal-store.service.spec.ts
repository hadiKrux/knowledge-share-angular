import { TestBed } from '@angular/core/testing';

import { SignalStoreService } from './signal-store.service';
import { Injectable } from '@angular/core';

interface IMockStore {
  test: string;
  another: number;
}

const initialState = { test: 'hola', another: 1 };

@Injectable({
  providedIn: 'root',
})
export class MockSignalStoreService extends SignalStoreService<IMockStore> {
  protected override storeData: IMockStore = initialState;

  constructor() {
    super();

    this.initStore();
  }
}

describe('SignalStoreService', () => {
  let service: MockSignalStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockSignalStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize store', () => {
    expect(service['state']()).toStrictEqual(initialState);
  });

  it('should get plain state', () => {
    const state = service.all();

    expect(state).toStrictEqual(initialState);
  });

  it('should select part of state', () => {
    const testState = service.select('test');

    expect(testState()).toBe(initialState.test);
  });

  it('should select part of state and get updated change', () => {
    const testState = service.select('test');
    service.set('test', 'xx');

    expect(testState()).toBe('xx');
  });

  it('should able to set state', () => {
    const newState = { test: '1', another: 222 };
    service.setState(newState);

    expect(service.all()).toStrictEqual(newState);
  });
});
