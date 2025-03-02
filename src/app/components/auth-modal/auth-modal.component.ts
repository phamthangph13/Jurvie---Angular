import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent {
  @Input() isOpen = false;
  @Input() authType: 'login' | 'register' = 'login';
  @Output() modalClosed = new EventEmitter<void>();
  currentView: 'login' | 'register' | 'forgot' = 'login';

  ngOnChanges() {
    if (this.authType) {
      this.currentView = this.authType;
    }
  }

  closeModal() {
    this.isOpen = false;
    this.modalClosed.emit();
  }

  switchView(view: 'login' | 'register' | 'forgot') {
    this.currentView = view;
  }
}