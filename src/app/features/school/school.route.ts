import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import {GestionEnfant} from './gestion-enfant/gestion-enfant';
import {SuiviFinancier} from './suivi-financier/suivi-financier';
import {Rapport} from './rapport/rapport';
import {Parametre} from './parametre/parametre';

const routes: Routes = [
  { path: 'schooldashboard', component: Dashboard },
  { path: 'gestion_enfant', component: GestionEnfant },
  { path: 'suivi_financier', component: SuiviFinancier },
  { path: 'rapport', component: Rapport },
  { path: 'parametres', component: Parametre },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolRoutingModule {}
