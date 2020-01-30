import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData : any = {
    email:'',
    password:'',
    isUnAuthorised:false
  }
  constructor(public usrService:UserService, private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('token')!=null) {
      this.router.navigateByUrl('/layout');
    }

  }

  loginSubmit(form:NgForm) {
    let loginData:any = {
      email : form.value.email,
      password :form.value.password
    }

    this.usrService.login(loginData).subscribe(
      (res:any) => {
        
       
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/layout');
        
      }, err => {
        if(err.status==401)  {
          
          this.loginData.isUnAuthorised=true;
          return;
        }
        
      }
    )
  }
}
