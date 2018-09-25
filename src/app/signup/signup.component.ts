import { Component, OnInit } from '@angular/core';
import { User,Global } from '../user';
declare var $:any ;
declare var jQuery:any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css',
  '/style.css' ,
  '/form.css', '/ghpages-materialize.css',
   '/materialize.css',
  '/prism.css', '/materialize.min.css']
})
export class SignupComponent  {
  
  constructor(private globals: Global) {

}
  

 
i=7;



 nm;ph;gend;oc;uname;pwd;em;date1;abt;
submitted = false;
u1:User;


onSubmit() { this.submitted = true; }

newUser() {
this.u1= new User(this.i++,this.nm,this.ph,this.gend,this.oc,this.uname,this.pwd,this.em,this.date1,this.abt);
  // this.u1 = new User(1,'gh','789065','male','gh','asd','abc','dw','sdf','dfd')
  console.log(this.u1.name)
this.globals.model.push(this.u1);

 
}

}
