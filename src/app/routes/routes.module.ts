import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { PagesModule } from './pages/pages.module';

import { routes } from './routes';
import { DashboardV1Component } from './dashboard/v1/v1.component';
import { DashboardAnalysisComponent } from './dashboard/analysis/analysis.component';
import { DashboardMonitorComponent } from './dashboard/monitor/monitor.component';
import { DashboardWorkplaceComponent } from './dashboard/workplace/workplace.component';

// pro
import { ProUserLoginComponent } from './pro/user/login/login.component';
import { ProUserRegisterComponent } from './pro/user/register/register.component';
import { ProUserRegisterResultComponent } from './pro/user/register-result/register-result.component';
import { SysAdminModule } from 'app/routes/sys-admin/sys-admin.module';
import { SysOpModule } from 'app/routes/sys-op/sys-op.module';
import { SysStatModule } from 'app/routes/sys-stat/sys-stat.module';
import { SysTrialModule } from 'app/routes/sys-trial/sys-trial.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes, { useHash: true, enableTracing: false }),
        PagesModule,
        SysAdminModule,
        SysOpModule,
        SysStatModule,
        SysTrialModule
    ],
    declarations: [
        DashboardV1Component,
        DashboardAnalysisComponent,
        DashboardMonitorComponent,
        DashboardWorkplaceComponent,
        // pro
        ProUserLoginComponent,
        ProUserRegisterComponent,
        ProUserRegisterResultComponent
    ],
    exports: [
        RouterModule
    ]
})

export class RoutesModule {}
