import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../service/global.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [GlobalService]
})
export class HomeComponent implements OnInit {
location:boolean;
  constructor(private globalVar:GlobalService) { }

  ngOnInit() {
    
  }
  ngDoCheck() {        
    this.location = this.globalVar.getURLInfo();
    console.log(this.location)       
  }
  
}
