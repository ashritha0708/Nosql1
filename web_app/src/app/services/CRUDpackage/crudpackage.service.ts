import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Package } from './package.model';


@Injectable({
  providedIn: 'root'
})
export class CRUDpackageService {
  selectedPackage: Package | undefined;
  packages : Package[] | undefined;
  

  constructor(private http:HttpClient) { }

  retrieve() {
    return this.http.get<any[]>('http://localhost:8080/CRUD/adminDashboard')
  }

  createPackage(data: any) :Observable<any>{
    return this.http.post('http://localhost:8080/crud/create', data);
  }

  changePackage(data: any) :Observable<any>{
    console.log(data)
    return this.http.put('http://localhost:8080/crud/edit', data);
  }

  deletePackage(_id : string) :Observable<any> {
    return this.http.delete('http://localhost:8080/crud/delete'+`/${_id}`);
  }

}
