
import { Component, Input, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { User,Global } from '../user';
import { ActivatedRoute } from '@angular/router';
import { KeyValuePipe } from '@angular/common';
import { Key } from 'protractor';

@Component({
  selector: 'app-finddetails',
  templateUrl: './finddetails.component.html',
  styleUrls: ['./finddetails.component.css',
  '/style.css', '/form.css', '/ghpages-materialize.css', '/materialize.css',
  '/prism.css', '/materialize.min.css'
]
})
export class FinddetailsComponent implements OnInit {
 
 public selected: string;
  constructor(public route: ActivatedRoute,private globals: Global) {
    
       
   }

  public cand = [] ;
   public i = 0 ;
  ngOnInit() {
    this.selected = (this.route.snapshot.paramMap.get('id'));
      for (let c of this.globals.model) {
      console.log(c.occupation);
      if (c.occupation == this.selected) {
      
      this.i++;
      this.cand.push(c);
         
        }
 
    }
   

  }
  find()
  {
    
  }
        
}
