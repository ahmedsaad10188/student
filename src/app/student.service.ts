import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class studentService {

  constructor(private _HttpClient:HttpClient) { }

  getdata(pagenumber):Observable<any>
  {
return this._HttpClient.get("https://reqres.in/api/users?page="+pagenumber+"&per_page=[students_per_page]");
  }
}
