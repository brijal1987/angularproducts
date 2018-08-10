import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Input() isUserLoggedIn: boolean;

	//public isUserLoggedIn: boolean = false;
  constructor(
  	private router: Router,
  	private AuthGuard: AuthGuard
  ) { }

  ngOnInit() {
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')): false;
      if( user && typeof user.email !== undefined) {
        this.isUserLoggedIn = true;
      }

  }
  logoutClicked(){
  	localStorage.removeItem('user');
  	this.isUserLoggedIn = false;
  	this.router.navigate(['/login'])
  }

}
