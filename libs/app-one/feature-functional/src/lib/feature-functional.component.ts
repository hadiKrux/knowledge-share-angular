import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturePresentationalComponent } from '@ka/feature-presentational';
import { IMenu, MenuService } from '@ka/app-one-data-access';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'ka-feature-functional',
  standalone: true,
  imports: [CommonModule, FeaturePresentationalComponent],
  templateUrl: './feature-functional.component.html',
})
export class FeatureFunctionalComponent implements OnInit {
  private _menuService = inject(MenuService);
  public menuItems = signal<IMenu[]>([]);
  public activeMenuItem = signal<IMenu | undefined>(undefined);

  ngOnInit(): void {
    firstValueFrom(this._menuService.data()).then((data) => {
      this.menuItems.set(data);
      this.activeMenuItem.set(data[0]);
    });
  }

  handleItemClickEvent(menuItem: IMenu): void {
    console.log('Clicked on menu item:', menuItem);
    this.activeMenuItem.set(menuItem);
  }
}
