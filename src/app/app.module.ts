import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
 import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    PostListComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    DataTablesModule,
   
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }