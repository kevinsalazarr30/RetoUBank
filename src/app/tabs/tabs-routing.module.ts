import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-home',
        loadChildren: () => import('../tab-client/tab-client.module').then(m => m.TabClientPageModule)

      },
      {
        path: 'tab-home/detail',
        loadChildren: () => import('../tab-detail/tab-detail.module').then(m => m.TabDetailPageModule)
      },
      {
        path: 'tab-reglas',
        loadChildren: () => import('../tab-reglas/tab-reglas.module').then(m => m.TabReglasPageModule)
      },
      {
        path: 'tab-reglas/detail',
        loadChildren: () => import('../tab-detail-reglas/tab-detail-reglas.module').then(m => m.TabDetailReglasPageModule)
      },
      {
        path: 'tab-simulation',
        loadChildren: () => import('../tab-simulation/tab-simulation.module').then(m => m.TabSimulationPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab-home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
