import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Package } from './package.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CRUDpackageService {
  selectedPackage: Package | undefined;
  packages : Package[] | undefined;
  
  private baseUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  retrieve() {
    return this.http.get<any[]>(`${this.baseUrl}/CRUD/adminDashboard`)
  }

  createPackage(data: any) :Observable<any>{
    return this.http.post(`${this.baseUrl}/crud/create`, data);
  }

  changePackage(data: any) :Observable<any>{
    console.log(data)
    return this.http.put(`${this.baseUrl}/crud/edit`, data);
  }

  deletePackage(_id : string) :Observable<any> {
    return this.http.delete(`${this.baseUrl}/crud/delete`+`/${_id}`);
  }

}
