import { Component } from '@angular/core';
import {Sidebar} from '../sidebar/sidebar';
import {Navbar} from '../navbar/navbar';


@Component({
  selector: 'app-gestion-enfant',
  standalone: true,
  imports: [Navbar, Sidebar],
  templateUrl: './gestion-enfant.html',
  styleUrl: './gestion-enfant.css'
})
export class GestionEnfant {

}
