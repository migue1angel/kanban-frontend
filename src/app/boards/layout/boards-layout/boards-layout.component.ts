import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavComponent } from '../../../shared/components/nav/nav.component';

@Component({
  selector: 'boards-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, NavComponent],
  templateUrl: './boards-layout.component.html',
  styles:``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardsLayoutComponent { }
