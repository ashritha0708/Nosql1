import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CRUDpackageService } from '../services/CRUDpackage/crudpackage.service'

@Component({
  selector: 'app-crud-create',
  templateUrl: './crud-create.component.html',
  styleUrls: ['./crud-create.component.scss']
})
export class CrudCreateComponent implements OnInit {
  form:FormGroup;
  message:string = '';
  className = 'd-none';
  constructor(
    private fb:FormBuilder,
    private crud:CRUDpackageService
  ) {
    this.form = this.fb.group({
      'PackageId': ['',Validators.required],
      'PackageName': ['',Validators.required],
      'Days': ['',Validators.required],
      'Price': ['',Validators.required],
      'image': ['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  addpackage() {
    const data = this.form.value;
    this.crud.createPackage(data)
      .subscribe(
        res => {
          if(res.success){
            this.message = res.message;
            this.className = 'alert alert-success'
          }else{
            this.message = res.message;
            this.className = 'alert alert-danger'
          }
        },
        err => {
          this.message = "server error";
          this.className = 'alert alert-danger'
        }
      )
  }

  getClassName() {
    return this.className;
  }

}
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPbK5m90-CW8D52BabXs0Y_-FQ4mNuPunVnw&usqp=CAU