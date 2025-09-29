import { Component, EventEmitter, Output } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {Navbar} from '../navbar/navbar';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    Navbar,
    Sidebar
  ],
  templateUrl: './dashboard.html',
  styleUrls: [ './dashboard.css']
})
export class Dashboard {

   isCollapsed = false;

  @Output() collapsedChange = new EventEmitter<boolean>();

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.collapsedChange.emit(this.isCollapsed);
  }
}
