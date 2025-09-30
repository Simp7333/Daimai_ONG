import { Component } from '@angular/core';
import {Sidebar} from '../sidebar/sidebar';
import {Navbar} from '../navbar/navbar';

@Component({
  selector: 'app-parametre',
  standalone: true,
  imports: [Sidebar, Navbar],
  templateUrl: './parametre.html',
  styleUrls: ['./parametre.css'],
})
export class Parametre {

}
