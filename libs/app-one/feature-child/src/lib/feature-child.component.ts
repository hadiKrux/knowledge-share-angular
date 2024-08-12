import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicStoreService } from '@ka/shared-data-access';
import { GlobalStoreService } from '@ka/app-one-data-access';

@Component({
  selector: 'ka-feature-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-child.component.html',
})
export class FeatureChildComponent implements OnInit {
  private _basicStoreService = inject(BasicStoreService);
  private _globalStoreService = inject(GlobalStoreService);

  ngOnInit(): void {
    setTimeout(() => {
      // this._basicStoreService.updateState({ isLoggedIn: true });
      // this._globalStoreService.set('test', 'something');
    }, 3000);
  }
}
