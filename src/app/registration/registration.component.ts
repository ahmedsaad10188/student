import { AuthService } from './../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sin-up',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  sinUPForm=new FormGroup
  ({
    first_name:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
    last_name:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
    age:new FormControl("",[Validators.required,Validators.min(12),Validators.max(25)]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern("^[A-Z a-z0-9]{6,10}$")]),
  });
  signup(registerdata)
  {
   this._AuthService.register(this.sinUPForm.value).subscribe((data)=>{
      this._Router.navigateByUrl("/Login");
   })

  }

  constructor(private _AuthService:AuthService, private _Router:Router) { }

  ngOnInit() {
  }

}
