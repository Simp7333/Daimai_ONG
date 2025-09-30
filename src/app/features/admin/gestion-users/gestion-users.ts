import { Component } from '@angular/core';
import {Navbar} from '../navbar/navbar';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  selector: 'app-gestion-users',
  standalone: true,
  imports: [Navbar, Sidebar],
  templateUrl: './gestion-users.html',
  styleUrls: ['./gestion-users.css'],
})
export class GestionUsers {

}
