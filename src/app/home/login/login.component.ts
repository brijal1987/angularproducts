import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsercredentialsService } from '../../common/services/usercredentials.service';


import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
  loginForm: FormGroup;
  errorMsg: string = '';
  users: User[] = [];

  constructor(
    private builder: FormBuilder ,
    private router: Router,
    private UsercredentialsService: UsercredentialsService,
    ) { }

  
  ngOnInit() {
    this.loginForm = this.builder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    })
  }

  login() {
  	let credentials = {
  		'email' : this.loginForm.get('email').value,
  		'password' :this.loginForm.get('password').value,
  	}

    this.UsercredentialsService.login(credentials).subscribe((data: User[]) => {
      this.users = data;
      console.log(JSON.stringify(data))
      //localStorage.setItem('user', JSON.stringify(data));
      //this.router.navigate(['/todo']);

    })
  }

}
