import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyComponent } from './home/content/about/company/company.component';
import { FounderComponent } from './home/content/about/founder/founder.component';
import { DashboardComponent } from './home/content/dashboard/dashboard.component';
import { ArticleComponent } from './home/content/article/article.component';
import { LoginComponent } from './home/content/login/login.component';
import { InscriptionComponent } from './home/content/inscription/inscription.component';
import { AboutComponent } from './home/content/about/about.component';
import { FaqComponent } from './home/content/faq/faq.component'

const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'article/:id', component: ArticleComponent },
    { path: 'login', component: LoginComponent },
    { path: 'inscription', component: InscriptionComponent },
    { path: 'about', component: AboutComponent, children:[
      { path: 'company', component: CompanyComponent },
      { path: 'founder', component: FounderComponent },
    ] },
    { path: 'faq', component: FaqComponent }
  
   ];

@NgModule({
    declarations: [
      
    ],
    imports: [
        BrowserModule,
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true })
    ],
    exports:[RouterModule],
    providers: [],
  
  })
  export class AppRoute { }