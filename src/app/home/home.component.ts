import { studentService } from './../student.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentpage=1;
  pagenumbers:number[]=[];
  students:any[]=[];
  constructor(private _studentService:studentService) 
  { 
    for(let i=1;i<3;i++)
    {
      this.pagenumbers.push(i);
    }
    this._studentService.getdata(this.pagenumbers).subscribe((data)=>{
      this.students=data.data;
    })

   


  }

  changenumber(ind)
  {
    this.currentpage=ind;
    this._studentService.getdata(this.currentpage).subscribe((data)=>{
      this.students=data.data;
    })
  }

 


 

  ngOnInit() {
  }
}

function i(i: any) {
  throw new Error('Function not implemented.');
}

