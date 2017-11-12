import { Injectable, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Injectable()
export class GlobalService implements OnInit {
  public blnDisplayMenu:string;
  constructor(private route: Router) {
   }
  
  ngOnInit(){
    
    console.log("from service",this.route.url)
  }
  getURLInfo(){
    if(this.route.url == '/login'){
      return false;
    }
    else{
      return true;
    }
  }

}

