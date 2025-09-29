
import {Router, NavigationEnd, RouterOutlet, RouterLink} from '@angular/router';
import {Component, signal} from '@angular/core';
import {Navbar} from './features/sponsor/navbar/navbar';
import {Sidebar} from './features/sponsor/sidebar/sidebar';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, Navbar, Sidebar, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('Deme');
  showLayout = true; // afficher navbar + sidebar par défaut

  constructor(private router: Router) {
    // Écoute les changements de route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Routes où on ne veut pas le layout
        const noLayoutRoutes = ['/login', '/register', ''];
        this.showLayout = !noLayoutRoutes.includes(event.urlAfterRedirects);
      }
    });
  }
}

