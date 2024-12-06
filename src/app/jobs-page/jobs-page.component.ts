import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface Job {
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
}


@Component({
  selector: 'app-jobs-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './jobs-page.component.html',
  styleUrl: './jobs-page.component.css'
})


export class JobsPageComponent {
  searchTerm: string = '';
  locationFilter: string = '';
  jobTypeFilter: string = '';

  jobs: Job[] = [
    { title: 'Frontend Developer', company: 'Tech Corp', location: 'Remote', type: 'Full-time', description: 'Develop and maintain the front end...' },
    { title: 'Data Analyst', company: 'Data Insights', location: 'On-site', type: 'Part-time', description: 'Analyze and interpret data...' },
    { title: 'AI Engineer', company: 'AI Solutions', location: 'Remote', type: 'Full-time', description: 'Develop AI models to enhance product intelligence and automate processes.' },
    { title: 'Photographer', company: 'Creative Lens', location: 'On-site', type: 'Freelance', description: 'Capture high-quality images for editorial, advertising, and creative projects.' },
    { title: 'Fine Art Instructor', company: 'Artistic Academy', location: 'On-site', type: 'Part-time', description: 'Teach art techniques and art history to students of various skill levels.' },
    { title: 'Backend Developer', company: 'Code Base', location: 'Remote', type: 'Full-time', description: 'Design, implement, and maintain backend systems using Node.js and databases.' },
    { title: 'Data Scientist', company: 'Data Driven', location: 'Remote', type: 'Full-time', description: 'Build predictive models and analyze data trends to drive strategic decisions.' },
    { title: 'Machine Learning Engineer', company: 'InnoTech', location: 'On-site', type: 'Full-time', description: 'Develop ML models for image and text recognition systems in production.' },
    { title: 'Electrical Engineer', company: 'Power Solutions', location: 'On-site', type: 'Full-time', description: 'Design, test, and improve electrical systems and components.' },
    { title: 'Embedded Systems Developer', company: 'IoT Innovators', location: 'On-site', type: 'Contract', description: 'Develop firmware for embedded systems with a focus on IoT devices.' },
    { title: 'Graphic Designer', company: 'Design Studio', location: 'Remote', type: 'Freelance', description: 'Create visual designs and branding materials for digital and print media.' },
    { title: 'Cybersecurity Specialist', company: 'SecureNet', location: 'Remote', type: 'Full-time', description: 'Develop and implement security strategies to protect organizational data.' },
    { title: 'Software Engineer', company: 'Tech Innovators', location: 'On-site', type: 'Full-time', description: 'Build and maintain software solutions for a variety of client needs.' },
    { title: 'AI Research Scientist', company: 'Research Labs', location: 'Remote', type: 'Full-time', description: 'Conduct research in AI algorithms and advancements in machine learning.' },
    { title: 'Cloud Engineer', company: 'Sky Solutions', location: 'Remote', type: 'Full-time', description: 'Design and maintain cloud infrastructure on AWS and Azure platforms.' },
    { title: 'Electrical Engineering Professor', company: 'Engineering University', location: 'On-site', type: 'Part-time', description: 'Teach and mentor students in electrical engineering concepts and projects.' },
    { title: 'Web Developer', company: 'Web Wonders', location: 'Remote', type: 'Full-time', description: 'Develop responsive websites using HTML, CSS, JavaScript, and frameworks.' },
    { title: 'AI Product Manager', company: 'Smart Solutions', location: 'On-site', type: 'Full-time', description: 'Oversee the development of AI-powered products from concept to launch.' },
    { title: 'Robotics Engineer', company: 'RoboLab', location: 'On-site', type: 'Full-time', description: 'Design, build, and test robots for manufacturing and automation industries.' },
    { title: 'Content Creator', company: 'Visual Story', location: 'Remote', type: 'Freelance', description: 'Produce engaging visual content for social media and marketing campaigns.' }
  ];

  suggestedJobs: Job[] = [
    { title: 'Backend Developer', company: 'CodeWorks', location: 'Remote', type: 'Full-time', description: 'Build and maintain backend services...' },
    // Add more suggested jobs here
  ];

  filteredJobs(): Job[] {
    return this.jobs.filter(job => {
      return (
        (!this.searchTerm || job.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || job.company.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
        (!this.locationFilter || job.location === this.locationFilter) &&
        (!this.jobTypeFilter || job.type === this.jobTypeFilter)
      );
    });
  }

  viewDetails(job: Job) {
    alert(`Viewing details for ${job.title}`);
  }
}
