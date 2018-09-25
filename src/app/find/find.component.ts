import { Component, OnInit } from '@angular/core';
import { User,Global } from '../user';
import {Routes, RouterModule, Router, NavigationExtras} from '@angular/router';
@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css',
  '/style.css', '/form.css', '/ghpages-materialize.css', '/materialize.css',
  '/prism.css', '/materialize.min.css'
]
})
export class FindComponent implements OnInit {

 // tslint:disable-next-line:no-trailing-whitespace
 
  public select: string;
  public str: string;
  constructor( private router: Router,private globals: Global) {
   }
  ngOnInit() {}
  selectedItem(s) {
   

    this.router.navigate(['finddetails', s.value]).toString();
  }
}


