import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigFetchingComponent } from './config-fetching/config-fetching.component';
import { AppListFetchingComponent } from './app-list-fetching/app-list-fetching.component';
import { SharedModule } from '@shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';

const routes: Routes = [
  {
      path: 'trial',
      component: LayoutComponent,
      children: [
          { path: '', redirectTo: 'get/config', pathMatch: 'full' },
          { path: 'get/config', component: ConfigFetchingComponent},
          { path: 'get/app', component: AppListFetchingComponent}
        ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfigFetchingComponent, AppListFetchingComponent]
})
export class SysTrialModule { }
