import { Component } from '@angular/core';
import {Navbar} from "../navbar/navbar";
import {Sidebar} from "../sidebar/sidebar";

@Component({
  selector: 'app-suivi',
  standalone: true,
    imports: [
        Navbar,
        Sidebar
    ],
  templateUrl: './suivi.html',
  styleUrls: ['./suivi.css' ],
})
export class Suivi {

}
