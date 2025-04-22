import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  constructor(
    private fb:FormBuilder,
    private authService:AuthService,
    private router:Router
    ) {
    this.form = this.fb.group({
      'EmailId': ['',Validators.required],
      'password': ['',Validators.required],
    })
   }

  ngOnInit(): void {
  }

  login(){
    const data = this.form.value;
    this.authService.signin(data)
    .subscribe(
      res => {
        if(res.success) {
          localStorage.setItem('token', res.token)
          this.router.navigate(['/home'])
        }else{
          alert(res.message)
        }
      },
      err => {
        alert("login failed")
      }
    )
  }
}
