import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userdata:any=new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient) { }
register(registerdata:object):Observable<any>
{
   return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',registerdata)
}
logIn(logIndata:object):Observable<any>
{
  return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin',logIndata)
}



savedata()
{
  let token= localStorage.getItem("token")
  this.userdata.next(token)
}



}
