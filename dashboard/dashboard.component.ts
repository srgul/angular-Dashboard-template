import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/serviceses/login.service';
import { UserService } from 'app/serviceses/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(  
    private login: LoginService,
    private user : UserService
  ) { }
  
  ngOnInit() {
    this.getAllUser();
  }

  userlist = [];

  getAllUser() {
    this.user.getUser().subscribe(res => {
      console.log(res)
    })
    
  }

}
