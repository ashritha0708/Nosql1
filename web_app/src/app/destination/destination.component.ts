import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
  destinations: any[] = [];

  private baseUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>(`${this.baseUrl}/destination`).subscribe(data => {
      this.destinations = data;
    });
  }
}
