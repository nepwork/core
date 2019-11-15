import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'invites',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../invite/invite.module').then(m => m.InvitePageModule)
          }
        ]
      },
      {
        path: 'plans',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../plan/plan.module').then(m => m.PlanPageModule)
          }
        ]
      },
      {
        path: 'organize',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../organize/organize.module').then(
                m => m.OrganizePageModule
              )
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
