import { Component ,OnInit} from '@angular/core';
declare var $:any ;
declare var jQuery:any;
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './form.css', './materialize.css', './prism.css', './style.css', './ghpages-materialize.css']
})
export class AppComponent  implements OnInit{
  title = 'Team';
  constructor() { }
  
  ngOnInit() {
    window.onscroll = function() {myFunction()};
 
    var topnav = document.getElementById("topnav");
    var sticky = topnav.offsetTop;
    
    function myFunction() {
     if (window.pageYOffset >= sticky) {
       topnav.classList.add("sticky");
     } else {
       topnav.classList.remove("sticky");
     }
    }
   
    
    
    
  }
  
  
}

