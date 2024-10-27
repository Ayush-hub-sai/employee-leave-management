import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { LeaveComponent } from './pages/leave/leave.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                title: 'Dashboard'
            }, {
                path: 'employee',
                component: EmployeeComponent,
                title: 'Employee'
            },
            {
                path: 'leave',
                component: LeaveComponent,
                title: 'Leave'
            }
        ]

    }
];
