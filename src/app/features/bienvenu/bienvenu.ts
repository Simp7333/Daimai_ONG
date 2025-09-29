import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {register} from 'node:module';

@Component({
  selector: 'app-bienvenu',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './bienvenu.html',
  styleUrls: ['./bienvenu.css'],
})
export class Bienvenu {

  protected readonly register = register;
}
