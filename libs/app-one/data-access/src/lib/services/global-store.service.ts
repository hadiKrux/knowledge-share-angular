import { Injectable } from '@angular/core';
import { SignalStoreService } from '@ka/shared-data-access';

interface IGlobalStore {
  test: string;
  another: number;
}

@Injectable({
  providedIn: 'root',
})
export class GlobalStoreService extends SignalStoreService<IGlobalStore> {
  protected override storeData: IGlobalStore = { test: 'hola', another: 1 };

  constructor() {
    super();

    this.initStore();
  }
}
