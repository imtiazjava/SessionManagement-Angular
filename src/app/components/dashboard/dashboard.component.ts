import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
name:string;
  constructor(private service:AuthService,private route:Router) { }

  ngOnInit() {
    if(this.service.isLoggedIn()){
       this.route.navigate(['login']);
    }
    this.name=this.service.getName();
  }


  logout(){
    this.service.logout();
  }

}
