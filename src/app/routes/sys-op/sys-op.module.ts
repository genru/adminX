import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceModelComponent } from './device-model/device-model.component';
import { AppModuleComponent } from './app-module/app-module.component';
import { ConfigComponent } from './config/config.component';
import { ReportComponent } from './report/report.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'app/app.component';
import { LayoutComponent } from 'app/layout/layout.component';

const routes: Routes = [
  {
      path: 'op',
      component: LayoutComponent,
      children: [
          { path: '', redirectTo: 'devices', pathMatch: 'full' },
          { path: 'devices', component: DeviceModelComponent, data: {title: 'user'}},
          { path: 'app', component: AppModuleComponent},
          { path: 'config', component: ConfigComponent},
          { path: 'query/:log', component: ReportComponent}
        ]
  },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeviceModelComponent, AppModuleComponent, ConfigComponent, ReportComponent]
})
export class SysOpModule { }
