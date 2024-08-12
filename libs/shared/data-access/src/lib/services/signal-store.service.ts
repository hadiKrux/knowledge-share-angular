import { Signal, WritableSignal, computed, signal } from '@angular/core';

export abstract class SignalStoreService<T> {
  private state: WritableSignal<T>;
  protected abstract storeData: T;

  /**
   * Initialize the store state behaviour subject with the store data
   *
   * @returns void
   */
  protected initStore(): void {
    this.state = signal(this.storeData);
  }

  /**
   * Get part of state
   *
   * @param key key of the property to be retrived
   * @returns
   */
  select<K extends keyof T>(key: K): Signal<T[K]> {
    return computed(() => this.state()[key]);
  }

  /**
   * Get all states
   *
   * @returns Signal<T>
   */
  get all(): Signal<T> {
    return this.state.asReadonly();
  }

  /**
   * Set a new value for state property
   *
   * @param key key of the property to be set
   * @param data new data to be set for the key
   */
  set<K extends keyof T>(key: K, data: T[K]): void {
    this.state.update((currentValue) => ({ ...currentValue, [key]: data }));
  }

  /**
   * Set partial state
   *
   * @param partialState partial state data with key and value
   */
  setState(partialState: Partial<T>): void {
    this.state.update((currentValue) => ({ ...currentValue, ...partialState }));
  }
}

/**
 * Usages
 * ---------------------------------------------------- */
// interface ISampleStore {
//     test: string;
//     another: number;
// }

// @Injectable({
//     providedIn: 'root',
// })
// export class SampleStore extends SignalStoreService<ISampleStore> {
//     protected override storeData: ISampleStore = { test: 'hola', another: 1 };

//     constructor() {
//         super();

//         this.initStore();
//     }
// }

// inside component
// test = this.sampleStore.select('test');
// testEffect = effect(() => {
//     console.log(this.test());
// });

// this.sampleStore.setState({ test: '22' });
// this.sampleStore.set('test', 'something');
