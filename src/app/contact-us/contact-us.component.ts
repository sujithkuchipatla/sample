import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  // Define a contactForm object to hold the form data
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  // Optionally, define contact info and social links
  contactInfo = {
    email: 'support@skillbridge.com',
    phone: '+1234567890',
    address: '123 Skill Bridge St, Learning City, Country'
  };

  socialLinks = {
    facebook: 'https://facebook.com/skillbridge',
    twitter: 'https://twitter.com/skillbridge',
    linkedin: 'https://linkedin.com/company/skillbridge'
  };

  // Submit form handler
  submitForm() {
    if (this.contactForm.name && this.contactForm.email && this.contactForm.subject && this.contactForm.message) {
      console.log('Form submitted successfully!', this.contactForm);
      // Process the form data (e.g., send it to a server)
    } else {
      console.log('Form is incomplete!');
    }
  }
}
