import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SysUserComponent } from './sys-user/sys-user.component';
import { MenuComponent } from './menu/menu.component';
import { ActionComponent } from './action/action.component';
import { RoleComponent } from './role/role.component';
import { QueryComponent } from './query/query.component';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';
import { Observable } from 'rxjs/Observable';
import { SharedModule } from '@shared/shared.module';
import { NeoSharedModule } from 'app/neo-shared/neo-shared.module';
import { UserEditorComponent } from './editors/user-editor/user-editor.component';
import { MenuEditorComponent } from './editors/menu-editor/menu-editor.component';

const routes: Routes = [
  {
      path: 'sys',
      component: LayoutComponent,
      children: [
          { path: '', redirectTo: 'user', pathMatch: 'full' },
          { path: 'user/new', component: UserEditorComponent },
          { path: 'user', component: SysUserComponent},
          { path: 'menu', component: MenuComponent},
          { path: 'menu/new', component: MenuEditorComponent},
          { path: 'action', component: ActionComponent},
          { path: 'role', component: RoleComponent},
          { path: 'query/:log', component: QueryComponent},
        ]
  },
];

@NgModule({
  imports: [
    SharedModule,
    NeoSharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SysUserComponent, MenuComponent, ActionComponent, RoleComponent, QueryComponent, UserEditorComponent, MenuEditorComponent],
  exports: [
    RouterModule
] ,

})
export class SysAdminModule { }
