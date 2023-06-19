import { Component } from '@angular/core';
import { UserAuthService } from '../authservice/user-auth.service';
import { Router } from '@angular/router';
import { UserService } from '../authservice/user.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService
  ) {}

  ngOnInit(): void {}

  // title(title: any) {
  //   throw new Error('Method not implemented.');
  // }
  isLoggedIn(){
    // Check if the user is logged in
    // Implement your authentication logic here
    // Return true if logged in, false otherwise
    return this.userAuthService.isLoggedIn();
    
  }

  logout(): void {
    // Implement logout functionality here
    // Clear any user authentication tokens or data
    this.userAuthService.clear();
    this.router.navigate(['/home']);
  }

}
