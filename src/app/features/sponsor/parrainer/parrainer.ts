import { Component } from '@angular/core';
import {Sidebar} from '../sidebar/sidebar';
import {Navbar} from '../navbar/navbar';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-parrainer',
  standalone: true,
  imports: [
    Navbar,
    Sidebar
  ],
  templateUrl: './parrainer.html',
  styleUrls: ['./parrainer.css']
})
export class Parrainer {

}
