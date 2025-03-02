import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './components/auth-modal/auth-modal.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive, 
    CommonModule, 
    AuthModalComponent, 
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jurvie';
  isMenuOpen = false;
  isAuthModalOpen = false;
  authType: 'login' | 'register' = 'login';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openAuthModal(type: 'login' | 'register') {
    this.authType = type;
    this.isAuthModalOpen = true;
  }

  onModalClosed() {
    this.isAuthModalOpen = false;
  }
}