import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Feedback {
  userId: string;
  message: string;
  rating: number;
}
@Injectable({ providedIn: 'root' })
export class FeedbackService {
  constructor(private http: HttpClient) {}

  
  postFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(`${environment.apiUrl}/feedback`, feedback);
  }

  getFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${environment.apiUrl}/feedback`);
  }
}