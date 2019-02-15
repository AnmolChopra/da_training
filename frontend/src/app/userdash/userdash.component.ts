import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { OperationsService } from '../services/operations.service';
@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {
resObj;
resData;
fetch;
  constructor(private router:Router,private oper:OperationsService) { }

  ngOnInit() {
    this.getData();
  }
clickme(){
  this.router.navigateByUrl("/userdash/userchapter");
  console.log("clicked");
}

getData(){
  this.resObj= this.oper.fetchtopic().subscribe((res)=>{
    this.resData=res;

  })
}

logout(){
  localStorage.removeItem('username');
this.router.navigate(['/userdash']);
}
}
