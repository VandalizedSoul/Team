import { Injectable } from '@angular/core';

export class User {
    constructor(
        public id:Number,
        public name:string,
        public contact:string,
        public gender:string,
        public occupation:string,
        public username:string,
        public password:string,
        public email?:string,
        public birthdate?:string,
        public about?:string,
    ){}
   
}



@Injectable()
export class Global{
    //u2:User;u3:User;u4:User;u5:User;u6:User ;
 
u2 = new User(1,'Ravi','733589065','male','Student','a3sd','a3bc','d33w','s3df','d3fd');
      //this.globals.model.push(this.u2);
       u3 = new User(2,'Parth','7834349065','male','Teacher','asd','abc','dw','sdf','dfd');
      //this.globals.model.push(this.u3);
      u4 = new User(3,'Pinak','78906434435','male','Engineer','asd','abc','dw','sdf','dfd');
      //this.globals.model.push(this.u4);
    u5 = new User(4,'Yash','78906434435','male','Student','asd','abc','dw','sdf','dfd');
      //this.globals.model.push(this.u5);
      u6= new User(5,'Nemish','78906434435','male','Teacher','asd','abc','dw','sdf','dfd');
      //this.globals.model.push(this.u6);
model:User[]=[this.u2,this.u3,this.u4,this.u5,this.u6];
occupations = ['Student', 'Teacher',
'Engineer', 'Doctor','Businessman','Other'];

 
}
