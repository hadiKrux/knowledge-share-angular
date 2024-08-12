import { BehaviorSubject, Observable, distinctUntilChanged, map } from 'rxjs';

export abstract class RxjsStoreService<T> {
  private stateSubject$: BehaviorSubject<T>;
  protected abstract storeData: T;

  /**
   * Initialize the store state behaviour subject with the store data
   *
   * @returns void
   */
  protected initStore(): void {
    this.stateSubject$ = new BehaviorSubject<T>(this.storeData);
  }

  /**
   * Observable state
   *
   * @returns Observable<T>
   */
  get state$(): Observable<T> {
    return this.stateSubject$.asObservable();
  }

  /**
   * Get observable state values
   *
   * @returns T
   */
  get state(): T {
    return this.stateSubject$.getValue();
  }

  /**
   * Broadcast data changes
   *
   * @returns void
   */
  private broadcast(): void {
    this.stateSubject$.next(this.storeData);
  }

  /**
   * Select a specific item from state
   *
   * @param selector (state => K)
   * @returns Observable<K>
   */
  select$<K>(selector: (state: T) => K): Observable<K> {
    return this.stateSubject$.pipe(map(selector), distinctUntilChanged());
  }

  /**
   * Update partial state
   *
   * @param partialState
   */
  setState(partialState: Partial<T>): void {
    this.storeData = { ...this.storeData, ...partialState };
    this.broadcast();
  }

  /**
   *
   * @param key key of the store data
   * @param data data for that key
   */
  set<K extends keyof T>(key: K, data: T[K]): void {
    this.storeData = { ...this.storeData, [key]: data };
    this.broadcast();
  }
}

/**
 * Usages
 * ---------------------------------------------------- */

/*
interface ISampleStore {
    test: string;
    another: number;
}

@Injectable({
    providedIn: 'root',
})
export class SampleStore extends RxjsStoreService<ISampleStore> {
    protected override storeData: ISampleStore = { test: 'hola', another: 1 };

    constructor() {
        super();

        this.initStore();
    }
}
*/

/**
 * Component usage
 * ---------------------------------------------------- */
// this.sampleStore.select$((state) => state.test).subscribe(console.log);
// this.sampleStore.setState({ another: 4 });
// this.sampleStore.set('test', '5');
