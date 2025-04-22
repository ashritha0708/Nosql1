import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  book(data: any) :Observable<any>{
    return this.http.post(`${this.baseUrl}/book/cart`, data);
  }
 }
