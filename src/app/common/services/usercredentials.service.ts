import { Injectable } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/https';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';

import { User } from '../models/user';
import { Users } from '../temp-userdata';

@Injectable({
  providedIn: 'root'
})
export class UsercredentialsService {
	users: User[] = Users;
  constructor(private http: HttpClient) {   
  }
  ngOnInit() {
  console.log(this.users)
  }
  getAllUsers(): Observable<User[]> {
    return this.users;
  }

  login(creds): Observable<User[]> {
    	let data = [];
    	this.users.forEach(obj => {
    		if(creds.email == obj.email && creds.password == obj.password){
          		data = obj;
          	}
      	});
      	return data;
    	//let apiUrl = './assets/data/credentials.json';
    	//return this.http.get<User[]>(apiUrl);
  }

  

}