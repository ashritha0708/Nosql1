import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
  form:FormGroup;
  islogin = false;
  message = '';
  class = 'd-none';
  constructor(
    private fb:FormBuilder,
    private router:Router
    ) { 
    this.form = this.fb.group({
      'EmailId': ['',Validators.required],
      'password': ['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  adminlogin(){
    const username = "admin123@gmail.com";
    const password = "qwerty123";
    if(username === this.form.value['EmailId'] && password === this.form.value['password']){
      
      this.islogin = true;
      this.class = 'alert alert-success';
      this.message = "Admin Login Successful"
      if(this.islogin){
        this.router.navigate(['/adminDashboard'])
      }
    }
    else{
      this.class = 'alert alert-danger';
      this.message = "Admin Login Failed, Enter valid credentials.."
    }
  }

  getClassName(){
    return this.class;
  }

}
