import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLinkActive, RouterModule } from '@angular/router';
export type MenuItem = {
  icon: string,
  label: string,
  route?: string
}
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    RouterLinkActive
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})

export class LayoutComponent {
  menuItem = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'supervised_user_circle',
      label: 'Employee',
      route: 'employee'
    },
    {
      icon: 'weekend',
      label: 'Leave',
      route: 'leave'
    }
  ])

  collapsed = signal(false)
  sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px')
  profilePicSize = computed(() => this.collapsed() ? '32' : '100')
}
