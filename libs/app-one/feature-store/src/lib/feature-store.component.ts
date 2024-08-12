import { Component, effect, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicStoreService } from '@ka/shared-data-access';
import { FeatureChildComponent } from '@ka/feature-child';
import { GlobalStoreService } from '@ka/app-one-data-access';

@Component({
  selector: 'ka-feature-store',
  standalone: true,
  imports: [CommonModule, FeatureChildComponent],
  templateUrl: './feature-store.component.html',
})
export class FeatureStoreComponent implements OnInit {
  private _basicStoreService = inject(BasicStoreService);

  // private _globalStoreService = inject(GlobalStoreService);
  // test = this._globalStoreService.select('test');
  // testEffect = effect(() => {
  //   console.log('signal store', this.test());
  // });

  ngOnInit(): void {
    this.basicStoreHandler();
  }

  basicStoreHandler() {
    this._basicStoreService.state$.subscribe({
      next: (state) => {
        console.log('basic store', state);
      },
    });
  }
}
