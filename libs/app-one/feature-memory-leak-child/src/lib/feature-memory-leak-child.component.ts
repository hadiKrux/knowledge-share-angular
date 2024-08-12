import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MemoryLeakService } from '@ka/app-one-data-access';

@Component({
  selector: 'ka-feature-memory-leak-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-memory-leak-child.component.html',
})
export class FeatureMemoryLeakChildComponent implements OnInit {
  private _memoryLeakService = inject(MemoryLeakService);
  private _destroyRef = inject(DestroyRef);
  public data = signal<number[]>([]);

  ngOnInit(): void {
    this._memoryLeakService.data$
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: (d) => {
          console.log('data', d);
          this.data.update((data) => [...data, ...d]);
        },
      });
  }
}
