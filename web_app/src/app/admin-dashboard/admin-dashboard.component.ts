import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CRUDpackageService } from '../services/CRUDpackage/crudpackage.service'
import { Package } from '../services/CRUDpackage/package.model'

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  providers: [CRUDpackageService]
})
export class AdminDashboardComponent implements OnInit {

  items: any = [];

  constructor(
    private router:Router,
    private crud:CRUDpackageService
    ) { }

  ngOnInit(): void {
    this.crud.retrieve().subscribe((data: any[]) =>{
      this.items = data;
      this.crud.packages = data as Package[];
     })
  }

  adminlogout() {
    this.router.navigate(['/adminlogin']);
  }

  add() {
    this.router.navigate(['/create']);
  }

  edit(id: number) {
    this.router.navigate(['/edit',id]);
  }

  remove(_id : string) {
    if(confirm('Are you sure you want to delete this package?') == true){
      this.crud.deletePackage(_id).subscribe(
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
    // this.router.navigate(['/delete',id]);
    // this.crud.selectedPackage = selectedpackage;
    // this.crud.deletePackage(selectedpackage).subscribe
  }

}
