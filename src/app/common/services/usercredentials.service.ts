import { Injectable } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
//import { HttpModule } from '@angular/http';
//import { HttpErrorResponse } from '@angular/common/https';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import { Http, Response } from '@angular/http';
import { User } from '../models/user';
import { Users } from '../temp-userdata';

import {map, catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsercredentialsService {
	users: User[] = Users ;
  constructor(private http: HttpClient) {   
  }
  ngOnInit() {
  
  }

  login(creds): Observable<any> {
    	let returndata   = [];

      return this.getConfig()
      .pipe(map(user => {
          this.users.forEach(obj => {
            console.log(creds.email +obj.email)
            console.log(creds.password +obj.password)
              if(creds.email == obj.email && creds.password == obj.password){
                user = obj;
              }
              else{
                user = false;
              }
          }); 
          return user;
        }));
  }

  getUsers(): Observable<any> {
    return this.getConfig();
  }
  getConfig() {
    return this.http.get<User[]>( './assets/data/credentials.json',{responseType: 'text'} );
  }

  

}