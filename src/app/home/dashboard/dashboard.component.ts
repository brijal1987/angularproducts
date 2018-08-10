import { Component, OnInit } from '@angular/core';

import { User } from '../../common/models/user';
import { Dashboard } from '../../common/models/dashboard';
import { DashboardService } from '../../common/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	public user: User[];
	public dashboardData: Dashboard[];
  constructor(private DashboardService: DashboardService) { }

  ngOnInit() {
  	this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')): false;
  	this.dashboardData= this.DashboardService.getDashboardData();
  	 console.log(this.dashboardData)
  	/*
  	this.DashboardService.getDashboardData().subscribe((data: Dashboard[]) => {
  		
        this.dashboardData= data; 
    	//this.dashboardData = JsonJSON.stringify(data);
        console.log(this.dashboardData)
    });
    */
  }

}
