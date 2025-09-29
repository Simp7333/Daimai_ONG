import {Component, NgModule} from '@angular/core';
import {Navbar} from '../navbar/navbar';
import {Sidebar} from '../sidebar/sidebar';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-paiement',
  standalone: true,
  imports: [
    Navbar,
    Sidebar,
    CommonModule,
  ],
  templateUrl: './paiement.html',
  styleUrls: [ './paiement.css' ]
})

export class Paiement {
  selectedMethod: 'carte' | 'mobile' | 'paypal' = 'carte';

  choisir(method: 'carte' | 'mobile' | 'paypal') {
    this.selectedMethod = method;
  }
}
