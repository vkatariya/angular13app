import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
   { path: 'post', component: FormComponent },
   {path: 'about',component:AboutComponent},
   {path: 'contact-us',component:ContactComponent},
   {path: 'post-list',component:PostListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}



