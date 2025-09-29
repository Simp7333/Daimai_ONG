import { Component } from '@angular/core';
import {Navbar} from '../navbar/navbar';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [Navbar, Sidebar],
  templateUrl: './notification.html',
  styleUrls: ['./notification.css'],
})
export class Notification {

}
