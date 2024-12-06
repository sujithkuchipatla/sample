import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  isLogin: boolean = true;

  // Login form fields
  loginEmail: string = '';
  loginPassword: string = '';

  // Signup form fields
  fullName: string = '';
  signupEmail: string = '';
  signupPassword: string = '';

  // Messages 
  signupMessage: string = ''; 
  loginMessage: string = '';

  constructor(private authService: AuthService) {}

  showLogin() {
    this.isLogin = true;
    this.signupMessage = ''; // Clear signup message
  }

  showSignup() {
    this.isLogin = false;
    this.loginMessage = ''; // Clear login message
  }

  onLogin() {
    this.authService.login(this.loginEmail, this.loginPassword).subscribe(
      response => {
        this.loginMessage = 'Successfully logged in!';
        console.log('Logged in successfully!', response);
        // Handle login response (e.g., save token, redirect)
      },
      error => {
        this.loginMessage = 'Wrong email or password';
        console.error('Login failed', error);
      }
    );
  }

  onSignup() {
    this.authService.signup(this.fullName, this.signupEmail, this.signupPassword).subscribe(
      response => {
        this.signupMessage = 'Account created successfully! Now you can log in.';
        console.log('Signed up successfully!', response);
        // Handle signup response (e.g., redirect to login)
      },
      error => {
        this.signupMessage = 'Signup failed, please try again';
        console.error('Signup failed', error);
      }
    );
  }
}

