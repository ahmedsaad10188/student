import { AuthService } from './../auth.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  
   isAuth:boolean=false;
  



  logout()
  {
    var token = localStorage.getItem('token');
    if (token) {
      localStorage.removeItem('token');
      this._Router.navigateByUrl("/Login"); 
     this._AuthService.userdata.subscribe(()=>{


            
        if (this._AuthService.userdata.getValue()==null) {
    
          this.isAuth=false
          
        } else {
    
          this.isAuth=true;
          
        }
    
              });
    }
    
  }
  constructor(private _Router:Router , private _AuthService:AuthService    ) {
          _AuthService.userdata.subscribe(()=>{


            
    if (this._AuthService.userdata.getValue()==null) {

      this.isAuth=false
      
    } else {

      this.isAuth=true;
      
    }

          });

   
   }
  ngOnInit() {


  }

}


