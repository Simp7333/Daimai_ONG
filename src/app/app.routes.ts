import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './features/sponsor/dashboard/dashboard';
import {Parrainer} from './features/sponsor/parrainer/parrainer';
import {Suivi} from './features/sponsor/suivi/suivi';
import {Paiement} from './features/sponsor/paiement/paiement';
import {Rapport} from './features/sponsor/rapport/rapport';
import {Parametres} from './features/sponsor/parametres/parametres';
import {Bienvenu} from './features/bienvenu/bienvenu';
import {Register} from './features/auth/register/register';
import {Notification} from './features/sponsor/notification/notification';
import {Layout} from './layout/layout';
import {Login} from './features/auth/login/login';

export const routes: Routes = [
  // Pages publiques (sans layout)
  { path: '', component: Bienvenu },
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  // Pages avec layout (authentifiées)
  {
    path: '',
    component: Layout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'parrainer', component: Parrainer },
      { path: 'suivi', component: Suivi },
      { path: 'paiement', component: Paiement },
      { path: 'rapport', component: Rapport },
      { path: 'parametres', component: Parametres },
      { path: 'notifications', component: Notification },
    ]
  },

  // Redirection par défaut
  { path: '**', redirectTo: 'bienvenu' },


  { path: 'school', loadChildren: () => {
      return import('./features/school/school.route').then(m => m.SchoolRoutingModule);
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
