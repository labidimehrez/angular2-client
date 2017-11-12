import { Injectable } from '@angular/core';
import {HttpModule,Response,Http} from '@angular/http';
import 'rxjs/add/operator/map'
@Injectable()
export class AppService {

  constructor(private http:Http) { }

  getPosts(){ 
    return this.http.get('https://jsonplaceholder.typicode.com/posts').map((res:Response)=>res.json());
  }

}
