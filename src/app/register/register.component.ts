import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public usrService : UserService) { }

  signUpData : any={
    username : '',
    email    : '',
    password : ''
  };

  ngOnInit() {
    // this.usrService.testConnection().subscribe(res=> {
    //   console.log(res);
      
    // });
  }
  
  signUpSubmit(form:NgForm) {
    this.usrService.register(form.value).subscribe(
      (res:any) => {
        form.reset();
        console.log(res);
        
      },
      err => {
        console.log(err);
      }
    );
  }
}
