import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MemoryLeakService } from '@ka/app-one-data-access';
import { FeatureMemoryLeakChildComponent } from '@ka/feature-memory-leak-child';
import { interval } from 'rxjs';

@Component({
  selector: 'ka-feature-memory-leak',
  standalone: true,
  imports: [CommonModule, FeatureMemoryLeakChildComponent],
  templateUrl: './feature-memory-leak.component.html',
})
export class FeatureMemoryLeakComponent implements OnInit {
  private _memoryLeakService = inject(MemoryLeakService);
  public isVisible = signal<boolean>(false);
  private _intervalUnsubscribe: any;

  ngOnInit(): void {
    this._intervalUnsubscribe = interval(200).subscribe({
      next: () => {
        this._memoryLeakService.update([Math.random()]);
      },
    });
  }

  onToggle(): void {
    this.isVisible.set(!this.isVisible());
  }

  unsubInterval(): void {
    this._intervalUnsubscribe.unsubscribe();
  }
}
