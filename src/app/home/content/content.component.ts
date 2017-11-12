import { Component, OnInit } from '@angular/core';
import {AppPipePipe} from '../../app-pipe.pipe';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

title:string = "hello word";
counter : number = 0;
flat:boolean = true;

result : any={};

constructor() { }

  ngOnInit() {
    

  }
  showValue(name){
      alert (name);
  }

  decrement(){
    return this.counter --;
  }
  increment(){
    return this.counter ++;
  }
 

}