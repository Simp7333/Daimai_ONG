import {RouterModule, Routes} from '@angular/router';
import {Dashboard} from '../sponsor/dashboard/dashboard';
import {Rapport} from '../sponsor/rapport/rapport';
import {NgModule} from '@angular/core';
import {Parrainer} from './parrainer/parrainer';
import {Suivi} from './suivi/suivi';
import {Paiement} from './paiement/paiement';
import {Parametres} from './parametres/parametres';
import {Notification} from './notification/notification';

const routes: Routes = [
      { path: 'dashboard', component: Dashboard },
      { path: 'parrainer', component: Parrainer },
      { path: 'suivi', component: Suivi },
      { path: 'paiement', component: Paiement },
      { path: 'rapport', component: Rapport },
      { path: 'parametres', component: Parametres },
      { path: 'notifications', component: Notification },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SponsorRoutingModule {}
