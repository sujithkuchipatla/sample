import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { HomeComponent } from './home/home.component';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
import { CredentialsPageComponent } from './credentials-page/credentials-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AuthComponent } from './auth/auth.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


 export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }, // Assuming you have a HomeComponent
  { path: 'courses', component: CoursesPageComponent }, // Route to CoursesPageComponent
  { path: 'jobs', component: JobsPageComponent },
  { path: 'credentials', component: CredentialsPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
