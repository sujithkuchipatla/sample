import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  companyMission: string = "At Skill Bridge, we aim to empower individuals through innovative learning paths.";
  teamProfiles: { name: string; role: string; imageUrl: string }[] = [
    {
      name: 'Bhanu Teja',
      role: 'CEO & Founder',
      imageUrl: 'https://ab7solutions.com/wp-content/uploads/2022/02/vector.png' // Replace with actual image paths
    },
    {
      name: 'Jhansi',
      role: 'Lead Developer',
      imageUrl: 'https://clevelandbayaviation.com.au/wp-content/uploads/2024/05/female-avatar2.png' // Replace with actual image paths
    },
    {
      name: 'Sujith',
      role: 'Bankend Developer',
      imageUrl: 'https://ab7solutions.com/wp-content/uploads/2022/02/vector.png' // Replace with actual image paths
    },
    {
      name: 'Kavya',
      role: 'Frontend Developer',
      imageUrl: 'https://clevelandbayaviation.com.au/wp-content/uploads/2024/05/female-avatar2.png' // Replace with actual image paths
    }
  ];
}
