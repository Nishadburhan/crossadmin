import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly apiURL:string="http://localhost:8000/api/";

  constructor(private http:HttpClient) { }
   
  register(data) {

    let userData:any={
      name : data.username,
      email: data.email,
      password: data.password
    }
    
   return this.http.post(this.apiURL+'register', userData);
  }

  login(data) {

    return this.http.post(this.apiURL+'login', data);
    
  }

  getUserProfile() {
    return this.http.get(this.apiURL+'userdetail');
  }
  
}
