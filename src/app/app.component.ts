import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterModule,FormsModule],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'skill-bridge';
}
