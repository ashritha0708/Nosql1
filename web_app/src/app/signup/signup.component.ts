import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form:FormGroup;
  message:string = '';
  className = 'd-none';
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  isProcessing = false;
  constructor(
    private fb:FormBuilder,
    private auth:AuthService,
    private router:Router
    ) { 
    this.form = this.fb.group({
      'FullName': ['',Validators.required],
      'EmailId': ['',Validators.pattern(this.emailPattern)],
      'password': ['',Validators.required],
      'confirm': ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  signup(){
    this.isProcessing = true;
    const data = this.form.value;
    delete data['confirm']
    this.auth.signup(data)
      .subscribe(
        res => {
          if(res.success){
            this.isProcessing = false;
            this.message = "Account created"
            this.className = 'alert alert-success'
            this.router.navigate(['/login']);
          }else{
            this.isProcessing = false;
            this.message = res.message;
            this.className = 'alert alert-danger'
          }
        },
        err => {
          this.isProcessing = false;
          this.message = "server error";
          this.className = 'alert alert-danger'
        }
      )
  }

  getClassName() {
    return this.className;
  }

  
}
