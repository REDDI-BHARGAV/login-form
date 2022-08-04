import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { ELEMENT_PROBE_PROVIDERS } from '@angular/platform-browser/src/dom/debug/ng_probe';

import { element } from 'protractor';
import { Regis } from 'src/Reg';
import { RegisService } from '../regis.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myform:FormGroup;
   public regis:Regis[]=[];
  regi : Regis = new Regis();
  regus :Regis[] =[];
  pmpid : number[] =[];
  

  constructor( private regisservice: RegisService  , private router:Router) {
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
    this.regisservice.getRegis().subscribe((result)=>(
    this.regus=result
      ));
     
     
   
  }
  method(){
    
    console.log(this.pmpid);
  }
  getNewRegis(){
    this.regi.uname=this.myform.get("uname").value;
    this.regi.empid=this.myform.get("empid").value;
    this.regi.gen=this.myform.get("gen").value;
    this.regi.LOC=this.myform.get("LOC").value;
    this.regi.bb=this.myform.get("bb").value;
    this.regi.isp=this.myform.get("isp").value;
    this.regus.forEach(element=>this.pmpid.push(element.empid));
    if(!this.pmpid.includes(this.regi.empid)){
      this.regisservice.addBook(this.regi).subscribe((result) => (this.regi = result));
      alert("emp details added");
    }
    else{
      alert("emp details already added");
    }
   
  }
  function() {
    this.getNewRegis();
   
   
    
  }
  view(){
    
  }


}
