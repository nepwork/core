import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'settings',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./settings/settings.module').then(m => m.SettingsPageModule)
      }
    ]
  },
  {
    path: 'event/:id',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./event/event.module').then(m => m.EventPageModule)
      }
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
