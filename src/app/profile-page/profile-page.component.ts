import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  name = 'John Doe';
  email = 'john.doe@example.com';
  profilePicture = 'assets/profile-picture.jpg'; // Placeholder image path
  skills = ['Data Analysis', 'Web Development', 'Project Management'];

  completedCourses = [
    { name: 'Angular Basics', description: 'Introduction to Angular framework', badge: 'Completed' },
    { name: 'Advanced CSS', description: 'CSS techniques and animations', badge: 'Certified' }
  ];

  editMode = false;
  formData = { name: this.name, email: this.email };

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveChanges() {
    this.name = this.formData.name;
    this.email = this.formData.email;
    this.editMode = false;
  }

  cancelEdit() {
    this.formData = { name: this.name, email: this.email };
    this.editMode = false;
  }

}
