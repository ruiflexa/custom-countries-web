import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/pages/auth/shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }
  userLogged: any;
  ngOnInit() {
  }
  
  showMenu(): boolean{
    return (this.router.url !== '/login');
  }

  userName(): string {
    if (localStorage.getItem('currentUser') != null){
      this.userLogged = JSON.parse(localStorage.getItem('currentUser'));
      return this.userLogged.userName;
    } else {
      return "";
    }
  }
  
  logout() {
    this.authService.logout();
  }
}