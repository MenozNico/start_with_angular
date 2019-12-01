import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';


import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';

import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { MainInfoComponent } from './main-info/main-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    ContactComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    MainInfoComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'news', component: NewsComponent },
      { path: 'contact', component: ContactComponent }
    ])
  ],

  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }


