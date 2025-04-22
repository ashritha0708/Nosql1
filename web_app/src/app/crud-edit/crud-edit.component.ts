import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CRUDpackageService } from '../services/CRUDpackage/crudpackage.service';

@Component({
  selector: 'app-crud-edit',
  templateUrl: './crud-edit.component.html',
  styleUrls: ['./crud-edit.component.scss']
})
export class CrudEditComponent implements OnInit {
  form:FormGroup;

  constructor(
    private fb:FormBuilder,
    private crud:CRUDpackageService,
    private route: ActivatedRoute
  ) { 
    this.form = this.fb.group({
      'PackageId': [''+this.route.snapshot.params['id']],
      'PackageName': ['',Validators.required],
      'Days': ['',Validators.required],
      'Price': ['',Validators.required],
      'image': ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  updatePackage() {
    const data = this.form.value;
    this.crud.changePackage(data)
      .subscribe(
        res => {
          if(res.success){
            alert(res.message)
          }else{
            alert(res.message)
          }
        },
        err => {
          alert("Server error");
        }
      )
  }
}
