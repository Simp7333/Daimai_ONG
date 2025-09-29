import {RouterModule, Routes} from '@angular/router';
import {Dashboard} from '../admin/dashboard/dashboard';
import {NgModule} from '@angular/core';
import {Parametre} from '../admin/parametre/parametre';
import {GestionFinance} from "./gestion-finance/gestion-finance";
import {GestionOng} from "./gestion-ong/gestion-ong";
import {GestionUsers} from "./gestion-users/gestion-users";
import {RapportSuivi} from "./rapport-suivi/rapport-suivi";

const routes: Routes = [
    { path: 'dashboard', component: Dashboard },
    { path: 'gestion_finance', component: GestionFinance },
    { path: 'gestion_ong', component: GestionOng },
    { path: 'gestion_user', component: GestionUsers },
    { path: 'parametre', component: Parametre },
    { path: 'rapport_suivi', component: RapportSuivi },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}
