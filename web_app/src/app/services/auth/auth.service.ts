import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl = environment.apiUrl;

  constructor(private http:HttpClient) {}

  signup(data: any) :Observable<any>{
    return this.http.post(`${this.baseUrl}/auth/signup`, data);
   }

   signin(data:any) : Observable<any> {
    
    return this.http.post(`${this.baseUrl}/auth/login`, data);
   }
   
   getProfile(): Observable<any> {
    let headers = {
      'Authorization': "Bearer " + localStorage.getItem('token')
    }
    return this.http.get(`${this.baseUrl}/auth/dashboard`, {headers: headers})
   }
}
