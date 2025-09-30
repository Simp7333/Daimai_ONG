import { Component } from '@angular/core';
import {Navbar} from '../navbar/navbar';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  selector: 'app-gestion-ong',
  standalone: true,
  imports: [Navbar, Sidebar],
  templateUrl: './gestion-ong.html',
  styleUrls: ['./gestion-ong.css'],
})
export class GestionOng {

}
