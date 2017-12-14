import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateSuccessComponent } from './update-success/update-success.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  {
      path: 'stat',
      component: LayoutComponent,
      children: [
          { path: '', redirectTo: 'query/update', pathMatch: 'full' },
          { path: 'query/:log', component: UpdateSuccessComponent}
        ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UpdateSuccessComponent]
})
export class SysStatModule { }
