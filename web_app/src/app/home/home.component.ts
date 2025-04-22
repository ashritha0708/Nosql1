import { Component, OnInit } from '@angular/core';
import { SharedPackagesService } from '../shared-packages.service'
import { Router } from '@angular/router'
import { CRUDpackageService } from '../services/CRUDpackage/crudpackage.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  isSelected = false;
  packages = this.shared.packages
  items: any = [];
  constructor(
    private shared:SharedPackagesService, 
    private crud:CRUDpackageService,
    private router:Router) { }

  ngOnInit(): void {
    this.crud.retrieve().subscribe((data: any[]) =>{
     this.items = data
    })

  }

  
  
  

  book(id: number){
    this.shared.id = id;
    // alert(this.shared.id)
    this.isSelected = true;
    if(this.isSelected){
    this.router.navigate(['/cart',id])
    }
  }

}
