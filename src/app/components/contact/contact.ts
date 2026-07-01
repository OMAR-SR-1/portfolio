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
  sending = false;
  error = false;

  async onSubmit() {
    this.sending = true;
    this.error = false;

    try {
      const response = await fetch('https://formspree.io/f/xwvdrkkr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          message: this.message
        })
      });

      if (response.ok) {
        this.sent = true;
        this.name = '';
        this.email = '';
        this.message = '';
        setTimeout(() => this.sent = false, 5000);
      } else {
        this.error = true;
      }
    } catch {
      this.error = true;
    } finally {
      this.sending = false;
    }
  }
}