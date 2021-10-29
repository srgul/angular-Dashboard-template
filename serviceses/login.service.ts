import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( 
    private http : HttpClient
  ) { }

  url = "http://localhost:3000/login"

  user = {
    "username": "sait",
    "password": "123-+asd!!"
}

  loginPost() {
    this.http.post(this.url, this.user ).subscribe(res => {
      console.log(res)
    })
  }


}
