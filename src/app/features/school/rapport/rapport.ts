import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {Navbar} from '../navbar/navbar';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  selector: 'app-rapport',
  standalone: true,
  imports: [RouterLink, Navbar, Sidebar],
  templateUrl: './rapport.html',
  styleUrls: ['./rapport.css'],
})
export class Rapport {

}
