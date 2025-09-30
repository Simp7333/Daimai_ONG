import { Component } from '@angular/core';
import {Sidebar} from '../sidebar/sidebar';
import {Navbar} from '../navbar/navbar';

@Component({
  selector: 'app-rapport-suivi',
  standalone: true,
  imports: [Sidebar, Navbar],
  templateUrl: './rapport-suivi.html',
  styleUrls: ['./rapport-suivi.css'],
})
export class RapportSuivi {

}
