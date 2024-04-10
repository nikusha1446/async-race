import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/garage/garage.component').then(
        (mod) => mod.GarageComponent,
      ),
  },
  {
    path: 'winners',
    loadComponent: () =>
      import('./features/winners/winners.component').then(
        (mod) => mod.WinnersComponent,
      ),
  },
]
