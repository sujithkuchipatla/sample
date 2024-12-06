import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import this module

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  courses = [
    { name: 'Photography', image: 'https://travelinspires.org/wp-content/uploads/revslider/dark-fullsite-block-5-testimonials/photographer.jpg' },
    { name: 'Fine Art', image: 'https://cdn-academywww.pressidium.com/wp-content/uploads/ss17-fine-art-bfa-richard-wang-untitled.jpg' },
    { name: 'Marketing', image: 'https://www.phoenixmedia.co.th/wp-content/uploads/2021/03/digital-marketing.jpg' },
    { name: 'Graphic Design', image: 'https://marketplace.canva.com/EAFDoJaPsAc/1/0/800w/canva-graphic-design-white-composition-instagram-post-xk4hcCKyAbE.jpg' },
    { name: 'Animation', image: 'https://th.bing.com/th/id/OIP.8btK-vzUtSmBjVkJptwsvQAAAA?rs=1&pid=ImgDetMain' },
    { name: 'Coding', image: 'https://s3.envato.com/files/261073186/code_2_img.jpg' },
    { name: 'Web Development', image: 'https://w3-lab.com/wp-content/uploads/2019/12/Get-the-Most-Fancied-Web-Development-Services-min-scaled.jpg' },
  ];
  faqs = [
        { question: 'What is Skillbridge?', answer: 'Skillbridge is a platform that connects learners with industry experts to gain practical skills through online courses.', showAnswer: false },
        { question: 'What is included in my Skillbridge membership?', answer: 'Your Skillbridge membership includes access to all courses, community forums, and additional resources provided by instructors.', showAnswer: false },
        { question: 'What can I learn from Skillbridge?', answer: 'You can learn a wide range of skills from various fields such as technology, business, creative arts, and more.', showAnswer: false },
        { question: 'What happens after my trial is over?', answer: 'After your trial period ends, you will need to subscribe to a paid membership to continue accessing the courses and resources.', showAnswer: false },
        { question: 'Can I teach on Skillbridge?', answer: 'Yes, you can apply to become an instructor on Skillbridge and share your expertise with learners around the world.', showAnswer: false }
    ];

    toggleAnswer(faq: any) {
        faq.showAnswer = !faq.showAnswer;
    }
  }
