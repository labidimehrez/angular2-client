import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http'; 
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {AppService} from '../../../service/app.service'
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  providers:[AppService]
})
export class FaqComponent implements OnInit {
  result : any;
  HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
  ];
  constructor(private route:ActivatedRoute,private posts: AppService) { 
    this.route.params.subscribe( params => console.log(params) );

  }

  ngOnInit() {
    this.posts.getPosts().subscribe(data=>this.result=data);
    /* this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      this.result = data;
    }); */
  }


}
