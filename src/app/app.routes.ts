import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './features/sponsor/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: Dashboard },
//   { path: 'parrainer', component: AccueilComponent },   // placeholder à remplacer
//   { path: 'suivi', component: AccueilComponent },       // idem
//   { path: 'paiement', component: AccueilComponent },
//   { path: 'rapport', component: AccueilComponent },
//   { path: 'parametres', component: AccueilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }