import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CRUDpackageService } from '../services/CRUDpackage/crudpackage.service';

@Component({
  selector: 'app-crud-delete',
  templateUrl: './crud-delete.component.html',
  styleUrls: ['./crud-delete.component.scss']
})
export class CrudDeleteComponent implements OnInit {
  form:FormGroup;

  constructor(
    private fb:FormBuilder,
    private crud:CRUDpackageService,
    private route: ActivatedRoute
  ) { 
    this.form = this.fb.group({
      'PackageId': [this.route.snapshot.params['id']],
    })
  }

  ngOnInit(): void {
  }

  removePackage() {
    const data = this.form.value;
    console.log(data)
    this.crud.deletePackage(data)
      .subscribe(
        res => {
          if(res){
            alert("Package deleted succesfully")
          }else{
            alert("Package deletion failed")
          }
        },
        err => {
          alert("Server error");
        }
      )
  }
}





