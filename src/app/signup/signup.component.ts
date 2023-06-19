import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  firstName: string='';
  lastName: string='';

  signup(): void {
    // Implement signup functionality
    // Use this.email and this.password to create a new user account
  }
}
