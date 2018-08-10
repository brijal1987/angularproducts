import { Injectable } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import { Http, Response } from '@angular/http';
import { User } from '../models/user';
import { Users } from '../data/temp-userdata';

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
    
      return this.getConfig()
      .pipe(map(user => {
          this.users.forEach(obj => {
              if(creds.email == obj.email && creds.password == obj.password){
              	user = creds;
              }
              else{
                user = 'false';
              }
          }); 
          return user;
        }));
  }

  getConfig() {
    return this.http.get( './assets/data/credentials.json',{responseType: 'text'} );
  }

  

}