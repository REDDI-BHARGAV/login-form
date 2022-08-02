import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string="";

  onclick(ref){
    if(ref.value.username=="cgi" && ref.value.password=="cgi"){
      
      this.router.navigateByUrl('register');
    }
    else{
      this.msg="invalid username or password";

    }
  }

  @ViewChild('myform') public myformref:NgForm
 
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
