import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  sinInForm=new FormGroup
  ({

    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern("^[A-Z a-z0-9]{6,10}$")]),
  });
  logIn(logIndata)
  {
   this._AuthService.register(this.sinInForm.value).subscribe((data)=>{
    localStorage.setItem('token',data.token);
          
          this._AuthService.savedata();

      this._Router.navigateByUrl("/Home");
   },(err)=>{
     console.log(err)
   })

  }

 

  constructor( private _AuthService:AuthService, private _Router:Router) { }

  ngOnInit() {
  }

}
