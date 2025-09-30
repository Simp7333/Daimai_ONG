import { Component } from '@angular/core';
import {Navbar} from '../navbar/navbar';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  selector: 'app-gestion-finance',
  standalone: true,
  imports: [Navbar, Sidebar],
  templateUrl: './gestion-finance.html',
  styleUrls: ['./gestion-finance.css'],
})
export class GestionFinance {

}
