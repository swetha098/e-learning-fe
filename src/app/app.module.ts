import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CourseitemComponent } from './courseitem/courseitem.component';
import { CoursesComponent } from './courses/courses.component';
import { AdminComponent } from './auth/admin/admin.component';
import { ForbiddenComponent } from './auth/forbidden/forbidden.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';
import { UserService } from './authservice/user.service';
import { AuthInterceptor } from './_auth/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CourseitemComponent,
    CourseDetailsComponent,
    CourseSearchComponent,
    HomeComponent,
    NavigationComponent,
    CoursesComponent,
    AdminComponent,
    ForbiddenComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
