import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  constructor(private http: HttpClient) {}

  getDestinations() {
    return this.http.get(`${environment.apiUrl}/destination`);
  }

  addDestination(destination: any) {
    return this.http.post(`${environment.apiUrl}/destination`, destination);
  }
}
