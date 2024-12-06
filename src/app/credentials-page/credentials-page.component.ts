
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Credential {
  name: string;
  organization: string;
  dateEarned: string;
  verified: boolean;
}


@Component({
  selector: 'app-credentials-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './credentials-page.component.html',
  styleUrl: './credentials-page.component.css'
})
export class CredentialsPageComponent {
  credentials: Credential[] = [
    { name: 'Angular Development', organization: 'Skill Bridge', dateEarned: '2023-06-15', verified: true },
    { name: 'Project Management', organization: 'Coursera', dateEarned: '2022-10-10', verified: false },
    // Additional sample credentials
  ];

  // Method to share credentials (e.g., via LinkedIn)
  shareCredential(credential: Credential) {
    alert(`Sharing ${credential.name} on LinkedIn...`);
  }

  // Method to download credentials as PDF
  downloadCredential(credential: Credential) {
    alert(`Downloading ${credential.name} as PDF...`);
  }

  // Method to add a new credential
  addCredential() {
    const newCredential: Credential = {
      name: 'New Course',
      organization: 'New Organization',
      dateEarned: new Date().toISOString().split('T')[0],
      verified: false
    };
    this.credentials.push(newCredential);
  }
}
