
  import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
 canActivate():boolean|Observable<boolean>
 {
   var token= localStorage.getItem('token');
   if (token) {
    return true

   }
   else
   {
     this._Router.navigateByUrl('/Login')
     return false
   }
 }
  constructor(private _Router:Router) { }
}

