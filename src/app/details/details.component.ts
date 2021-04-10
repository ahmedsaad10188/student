import { studentService } from './../student.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  studentid;
  studentdetails:any={};

  constructor( private _studentService:studentService ,private _ActivatedRoute:ActivatedRoute) 


  {
      this.studentid=_ActivatedRoute.snapshot.paramMap.get("id");
      this._studentService.getdata(1).subscribe((data)=>{

        this.studentdetails=data.data[this.studentid];
      })

   }
   
  


  ngOnInit() {

  
      }

}
