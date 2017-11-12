import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  articles : any={};
  constructor(private http:HttpClient,private translate: TranslateService) {
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang('en');
 
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
 
   }

  ngOnInit() {
/*this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(data => { */    
  
this.articles = JSON.parse(localStorage.getItem('articles'));
  

}
}
