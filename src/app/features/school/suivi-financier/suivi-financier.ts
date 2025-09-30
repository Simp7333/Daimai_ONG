import { Component } from '@angular/core';
import {Navbar} from '../navbar/navbar';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  selector: 'app-suivi-financier',
  standalone: true,
  imports: [Navbar, Sidebar],
  templateUrl: './suivi-financier.html',
  styleUrls: ['./suivi-financier.css'],
})
export class SuiviFinancier {

}
