import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CrudCreateComponent } from './crud-create/crud-create.component';
import { CrudEditComponent } from './crud-edit/crud-edit.component';
import { CrudDeleteComponent } from './crud-delete/crud-delete.component';
import { FormsModule } from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    FooterComponent,
    AdminloginComponent,
    NavbarComponent,
    HomeComponent,
    CartComponent,
    AdminDashboardComponent,
    CrudCreateComponent,
    CrudEditComponent,
    CrudDeleteComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCollapseModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
