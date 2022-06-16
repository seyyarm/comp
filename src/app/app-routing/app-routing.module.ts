import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { AboutComponent } from '../components/about/about.component';
import { BlogComponent } from '../components/blog/blog.component';
import { HomeComponent } from '../components/home/home.component';
import { UsersComponent } from '../components/users/users.component';


const appRoutes : Routes = [
  { path : 'home' , component:HomeComponent} ,
  { path : 'about' , component:AboutComponent} ,
  { path : 'blog' , component:BlogComponent} ,
  { path : 'users' , component:UsersComponent}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
