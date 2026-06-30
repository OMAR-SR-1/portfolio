import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  name = '';
  email = '';
  message = '';
  sent = false;

  onSubmit() {
    console.log({ name: this.name, email: this.email, message: this.message });
    this.sent = true;
    this.name = '';
    this.email = '';
    this.message = '';

    setTimeout(() => this.sent = false, 4000);
  }
}