import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PrimeIcons } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

interface SideItem {
  label: string;
  icon: string;
  route: string;
  children?: SideItem[];
}

@Component({
  selector: 'side-items',
  templateUrl: './side-items.component.html',
  imports: [RouterLink, RouterLinkActive, ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideItemsComponent {

  protected icons = PrimeIcons
  protected sideItems:SideItem[] = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      route: 'dashboard',
    },
    {
      label: 'Boards',
      icon: 'grading',  
      route: 'board-list',
    },
    {
      label: 'Calendar',
      icon: 'calendar_month',
      route: 'calendar',
    },
  ];
}
