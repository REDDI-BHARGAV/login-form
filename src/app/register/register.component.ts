import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Regis } from 'src/Reg';
import { RegisService } from '../regis.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myform:FormGroup;
   public regis:Regis[]=[];
  regi : Regis = new Regis();
  

  constructor( private regisservice: RegisService) {
    this.myform=new FormGroup({
      uname:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
      empid:new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(6),Validators.pattern('[0-9]*')]),
      gen:new FormControl("",[Validators.required]),
      LOC:new FormControl("",[Validators.required]),
      bb:new FormControl("",[Validators.required]),
      isp:new FormControl("",[Validators.required])
    })
   }

  ngOnInit() {
   
  }
  method(){
    console.log(this.regisservice.getRegis());
  }
  getNewRegis(){
    this.regi.uname=this.myform.get("uname").value;
    this.regi.empid=this.myform.get("empid").value;
    this.regi.gen=this.myform.get("gen").value;
    this.regi.LOC=this.myform.get("LOC").value;
    this.regi.bb=this.myform.get("bb").value;
    this.regi.isp=this.myform.get("isp").value;
    
    this.regisservice.addBook(this.regi).subscribe((result) => (this.regi = result));
  }
  function() {
    this.getNewRegis();
    alert('registration completed successfully');
   
    
  }


}
