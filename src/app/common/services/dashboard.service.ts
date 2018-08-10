import { Injectable } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import { Http, Response } from '@angular/http';
import {map, catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { Dashboard } from '../models/dashboard';
import { Dashboarddata } from '../data/temp-dashboarddata';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
	dashboardData: Dashboard[] = Dashboarddata ;
  constructor(private http: HttpClient) { 

      
  }
  getDashboardData(){
  return this.dashboardData;
  /*
  	return this.http.get( './assets/data/dashboard.json',{responseType: 'text'} ).pipe(
      map(dashboardData => {
        return this.dashboardData;
      }, error => error)
    );
    */
  }
}
