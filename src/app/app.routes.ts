import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { GameSelectionComponent } from './game-selection.component';
import { GameDetailsComponent } from './game-details.component';
import { GameCardsComponent } from './game-cards.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'game-selection',
    component: GameSelectionComponent,
  },
  {
    path: 'game-details/:id', // Add dynamic segment to pass game ID
    component: GameDetailsComponent,
  },
  {
    path: 'game/:id/start',
    component: GameCardsComponent,
  },
  {
    path: 'game/:id/continue',
    component: GameCardsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
