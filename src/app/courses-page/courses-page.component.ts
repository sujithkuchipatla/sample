import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses-page',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.css'
})
export class CoursesPageComponent {
  searchQuery = '';
  selectedCategory = '';
  courses = [
    { title: 'Data Science', provider: 'SkillBridge', level: 'Beginner', duration: '10 hrs', rating: 4.5, description: 'Learn the basics of Data Science.', category: 'Data Science' },
    { title: 'Web Development', provider: 'SkillBridge', level: 'Intermediate', duration: '15 hrs', rating: 4.7, description: 'Build your first website with HTML, CSS, and JS.', category: 'Web Development' },
    { title: 'Business Strategy', provider: 'SkillBridge', level: 'Advanced', duration: '20 hrs', rating: 4.8, description: 'Master business strategies.', category: 'Business Skills' },
    // Photography Courses
    { title: 'Photography Basics', provider: 'SkillBridge', level: 'Beginner', duration: '8 hrs', rating: 4.6, description: 'Learn the fundamentals of photography.', category: 'Photography' },
    { title: 'Advanced Portrait Photography', provider: 'SkillBridge', level: 'Advanced', duration: '12 hrs', rating: 4.8, description: 'Master the art of portrait photography.', category: 'Photography' },
    
    // Fine Art Courses
    { title: 'Introduction to Fine Arts', provider: 'SkillBridge', level: 'Beginner', duration: '10 hrs', rating: 4.5, description: 'Explore the world of fine arts.', category: 'Fine Arts' },
    { title: 'Advanced Painting Techniques', provider: 'SkillBridge', level: 'Advanced', duration: '15 hrs', rating: 4.7, description: 'Learn advanced techniques in painting.', category: 'Fine Arts' },
    
    // Marketing Courses
    { title: 'Digital Marketing', provider: 'SkillBridge', level: 'Intermediate', duration: '14 hrs', rating: 4.7, description: 'Understand the basics of digital marketing.', category: 'Marketing' },
    { title: 'SEO Mastery', provider: 'SkillBridge', level: 'Advanced', duration: '12 hrs', rating: 4.6, description: 'Learn how to master SEO techniques.', category: 'Marketing' },
    
    // Graphic Design Courses
    { title: 'Graphic Design Basics', provider: 'SkillBridge', level: 'Beginner', duration: '10 hrs', rating: 4.6, description: 'Learn the basics of graphic design.', category: 'Graphic Design' },
    { title: 'Advanced Adobe Photoshop', provider: 'SkillBridge', level: 'Advanced', duration: '15 hrs', rating: 4.8, description: 'Master Adobe Photoshop for graphic design.', category: 'Graphic Design' },
    
    // Animation Courses
    { title: 'Introduction to Animation', provider: 'SkillBridge', level: 'Beginner', duration: '10 hrs', rating: 4.5, description: 'Learn the basics of animation.', category: 'Animation' },
    { title: '3D Animation Techniques', provider: 'SkillBridge', level: 'Advanced', duration: '18 hrs', rating: 4.8, description: 'Master 3D animation techniques.', category: 'Animation' },
    
    // Coding and Web Development Courses
    { title: 'JavaScript for Beginners', provider: 'SkillBridge', level: 'Beginner', duration: '8 hrs', rating: 4.7, description: 'Learn JavaScript from scratch.', category: 'Web Development' },
    { title: 'Full Stack Development', provider: 'SkillBridge', level: 'Advanced', duration: '25 hrs', rating: 4.9, description: 'Become a full stack web developer.', category: 'Web Development' },
    
    // ECE Courses
    { title: 'Introduction to Signal Processing', provider: 'SkillBridge', level: 'Beginner', duration: '12 hrs', rating: 4.5, description: 'Understand the basics of signal processing.', category: 'ECE' },
    { title: 'Advanced VLSI Design', provider: 'SkillBridge', level: 'Advanced', duration: '20 hrs', rating: 4.7, description: 'Master the design of VLSI systems.', category: 'ECE' },
    
    // EEE Courses
    { title: 'Basics of Electrical Circuits', provider: 'SkillBridge', level: 'Beginner', duration: '10 hrs', rating: 4.6, description: 'Learn the fundamentals of electrical circuits.', category: 'EEE' },
    { title: 'Power Electronics', provider: 'SkillBridge', level: 'Advanced', duration: '18 hrs', rating: 4.7, description: 'Master power electronics techniques.', category: 'EEE' }
];

  categories = ['Data Science', 'Web Development', 'Business Skills', 'Design', 'Marketing'];
  
  get filteredCourses() {
    return this.courses.filter(course => 
      course.title.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
      (!this.selectedCategory || course.category === this.selectedCategory)
    );
  }
}
