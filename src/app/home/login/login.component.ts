import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsercredentialsService } from '../../common/services/usercredentials.service';


import { User } from '../../common/models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() 
  isUserLoggedIn: boolean = false;

  

  loginForm: FormGroup;
  errorMsg: string = '';
  users: User[];
  users1: User[];
  constructor(
    private builder: FormBuilder ,
    private router: Router,
    private UsercredentialsService: UsercredentialsService,
    ) { }

  
  ngOnInit() {
    this.loginForm = this.builder.group({
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(4)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });
    if(localStorage.getItem('user')){
      this.router.navigate(['/dashboard']);
    }
    console.log( this.users)
  }

  login() {
  	let credentials = {
  		'email' : this.loginForm.get('email').value,
  		'password' :this.loginForm.get('password').value,
  	}

    this.UsercredentialsService.login(credentials)
    .subscribe((data) => {
    if(data === 'false'){
    	this.errorMsg = "Invalid Credentials"
    }
    else{

    	localStorage.setItem('user', JSON.stringify(data));
      this.isUserLoggedIn = true;
      let el: HTMLElement = document.getElementById('loginElemt') as HTMLElement;
      el.click()
      this.router.navigate(['/dashboard']);
    }
    /*data = JSON.parse(JSON.stringify(data));
    var result = Object.keys(data).map(e=>data[e]);

    console.log(result);
    */
       // this.users = data;
       // console.log(this.users[0])
    });
    //console.log(progress.data)
    /*
    this.UsercredentialsService.login(credentials).subscribe((data: User[]) => {
      //this.users = data;
      //console.log(JSON.stringify(data))
      //localStorage.setItem('user', JSON.stringify(data));
      //this.router.navigate(['/todo']);

    })*/
  }

}
