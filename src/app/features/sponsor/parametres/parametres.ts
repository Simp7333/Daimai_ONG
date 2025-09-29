import { Component } from '@angular/core';
import {Sidebar} from '../sidebar/sidebar';
import {Navbar} from '../navbar/navbar';

@Component({
  selector: 'app-parametres',
  standalone: true,
  imports: [Sidebar, Navbar],
  templateUrl: './parametres.html',
  styleUrls: ['./parametres.css'],
})
export class Parametres {

}
