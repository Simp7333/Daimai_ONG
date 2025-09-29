import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Navbar} from '../navbar/navbar';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  selector: 'app-rapport',
  standalone: true,
  imports: [CommonModule, Navbar, Sidebar],
  templateUrl: './rapport.html',
  styleUrls: ['./rapport.css']
})
export class Rapport {
  selectedChild: string | null = null;
  children = ['Aminata', 'Djeneba', 'Amadou', 'Djiré'];
}
