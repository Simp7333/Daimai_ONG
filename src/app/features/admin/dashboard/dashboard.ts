import { Component } from '@angular/core';
import {Sidebar} from '../../admin/sidebar/sidebar';
import {Navbar} from '../../admin/navbar/navbar';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Sidebar, Navbar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
