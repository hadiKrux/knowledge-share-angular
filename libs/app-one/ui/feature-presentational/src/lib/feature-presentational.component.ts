import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMenu } from '@ka/app-one-data-access';

@Component({
  selector: 'ka-feature-presentational',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-presentational.component.html',
})
export class FeaturePresentationalComponent {
  public items = input.required<IMenu[]>();
  public styleClass = input<string>();
  public activeItem = input<IMenu>();
  public onItemClickEvent = output<IMenu>();

  public onItemClick(event: MouseEvent, item: IMenu): void {
    event.preventDefault();

    this.onItemClickEvent.emit(item);
  }
}
