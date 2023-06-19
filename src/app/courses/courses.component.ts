import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses = [
    { title: 'Python', description: 'Learn Java programming', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczajFgzNmGEHv9a0T91q9Q2AN_B1iRHPNNAtP2dt3FwgTjOb5ROZY5u-uziIFHeM-ELA&usqp=CAU' },
    { title: 'Data Science', description: 'Explore Python programming', image: 'https://thumbs.dreamstime.com/b/data-science-deep-learning-artificial-intelligence-analysis-internet-modern-technology-concept-130068639.jpg' },
    // Add more courses as needed
  ];
  isLoggedIn = false;
  showPopup = false;
  popupMessage = '';
  constructor(private router: Router) {}
  navigateTo(course: any) {
    if (this.isLoggedIn) {
      this.router.navigate(['/courses']);
    } else {
      this.popupMessage = 'Please log in to continue.';
      this.showPopup = true;
      this.router.navigate(['/courseitem']);
    }
  }
  searchQuery: string = '';
  get filteredCourses() {
    if (this.searchQuery.trim() === '') {
      return this.courses;
    } else {
      return this.courses.filter(course =>
        course.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      }

    }

}
