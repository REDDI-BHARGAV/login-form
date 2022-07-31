import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myform:FormGroup;


  constructor() {
    this.myform=new FormGroup({
      uname:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
      cname:new FormControl("",[Validators.required,Validators.pattern('[0-9]*')]),
      ugen:new FormControl("",[Validators.required]),
      add:new FormControl("",[Validators.required,Validators.maxLength(50)]),
      dob:new FormControl("",[Validators.required])
    })
   }

  ngOnInit() {
  }
  function() {
    alert('registration completed successfully');
    
  }


}
