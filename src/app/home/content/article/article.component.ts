import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],

})
export class ArticleComponent implements OnInit {
  articleName:string;
  priceArticel:string;
  detailArticle:string;
  ArticleLists : any = [];
  constructor() { 
    if(localStorage.getItem('articles')){
      this.ArticleLists = JSON.parse(localStorage.getItem('articles'));
    }
  }

  ngOnInit() {
    
  }
  submit(){
    let data={
      libelle:this.articleName,
      prix:this.priceArticel,
      detail:this.detailArticle,
    }
    this.ArticleLists.push(data);
    localStorage.setItem('articles',JSON.stringify(this.ArticleLists))

  }
reset(){
  this.detailArticle='';
  this.priceArticel='';
  this.articleName='';
}
}
