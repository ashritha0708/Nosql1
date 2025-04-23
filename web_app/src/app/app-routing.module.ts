import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component' ;
import { CartComponent } from './cart/cart.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component'
import { CrudCreateComponent } from './crud-create/crud-create.component'
import { CrudEditComponent } from './crud-edit/crud-edit.component'
import { CrudDeleteComponent } from './crud-delete/crud-delete.component'



const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'signup', component:SignupComponent},
  {path:'cart/:id', component:CartComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'adminlogin', component:AdminloginComponent},
  {path:'adminDashboard', component:AdminDashboardComponent},
  {path:'create', component:CrudCreateComponent},
  {path:'edit/:id', component:CrudEditComponent},
  {path:'delete/:id', component:CrudDeleteComponent},
  {path:'**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
