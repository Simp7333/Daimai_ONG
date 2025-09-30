import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {Navbar} from '../navbar/navbar';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  selector: 'app-parametre',
  standalone: true,
  imports: [RouterLink, Navbar, Sidebar],
  templateUrl: './parametre.html',
  styleUrls: ['./parametre.css'],
})
export class Parametre {

}
