import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ka-feature-signal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-signal.component.html',
})
export class FeatureSignalComponent {
  public count = signal<number>(0);
  public isLoggedIn = signal<boolean>(false);
  public countMultiplier = computed(() => this.count() * 2);

  private isLoggedInEffect = effect(() => {
    console.log('isLoggedIn effect', this.isLoggedIn());
  });

  toggleLoggedIn() {
    this.isLoggedIn.set(!this.isLoggedIn());
  }

  increment() {
    this.count.update((count) => count + 1);
  }

  decrement() {
    this.count.update((count) => count - 1);
  }
}
