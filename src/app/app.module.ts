import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { ContentComponent } from './home/content/content.component';

import { ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { MydirectiveDirective } from './mydirective.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { AppPipePipe } from './app-pipe.pipe';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ArticleComponent } from './home/content/article/article.component';
import { LoginComponent } from './home/content/login/login.component';
import { InscriptionComponent } from './home/content/inscription/inscription.component';
import { AboutComponent } from './home/content/about/about.component';
import { FaqComponent } from './home/content/faq/faq.component'
/* import route module */
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './home/content/about/company/company.component';
import { FounderComponent } from './home/content/about/founder/founder.component';
import { DashboardComponent } from './home/content/dashboard/dashboard.component';

import {AppRoute} from './app.route';
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, "./assets/i18n_", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    MydirectiveDirective,
    AppPipePipe,
    ArticleComponent,
    LoginComponent,
    InscriptionComponent,
    AboutComponent,
    FaqComponent,
    CompanyComponent,
    FounderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    AppRoute,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
