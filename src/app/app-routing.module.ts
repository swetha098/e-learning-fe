import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseitemComponent } from './courseitem/courseitem.component';
import { AdminComponent } from './auth/admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: CourseSearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'courses', component: CoursesComponent},
  { path: 'courseitem', component: CourseitemComponent},
  { path: 'admin', component: AdminComponent}
  // Add other routes for your components here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
