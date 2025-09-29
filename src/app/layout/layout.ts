import { Component } from '@angular/core';
import {Sidebar} from '../features/sponsor/sidebar/sidebar';
import {Navbar} from '../features/sponsor/navbar/navbar';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    Sidebar,
    Navbar,
    RouterOutlet
  ],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],
})
export class Layout {

}
