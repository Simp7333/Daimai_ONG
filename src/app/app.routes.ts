import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Bienvenu} from './features/auth/bienvenu/bienvenu';
import {Register} from './features/auth/register/register';
import {Login} from './features/auth/login/login';


export const routes: Routes = [
  // Pages publiques (sans layout)
  { path: '', component: Bienvenu },
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  { path: 'sponsor', loadChildren: () => import('./features/sponsor/sponsor.route').then(m => m.SponsorRoutingModule) },
  { path: 'school', loadChildren: () => import('./features/school/school.route').then(m => m.SchoolRoutingModule) },
  { path: 'admin', loadChildren: () => import('./features/admin/admin.route').then(m => m.AdminRoutingModule)
    //canActivate: [AuthGuard, RoleGuard],
   // data: { roles: ['ADMIN'] }
  },
  { path: '**', redirectTo: '' } // page 404 -> par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
