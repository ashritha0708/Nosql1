import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FeedbackService } from '../services/feedback/feedback.service';

export interface Feedback {
  userId: string;
  message: string;
  rating: number;
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html'
})
export class FeedbackComponent implements OnInit {
  feedback: Feedback = {
    userId: '',
    message: '',
    rating: 5
  };
  users: any[] = [];

  constructor(private feedbackService: FeedbackService, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>(`${environment.apiUrl}/auth/users`).subscribe(data => {
      this.users = data;
    });
  }

  submitFeedback(): void {
    this.feedbackService.postFeedback(this.feedback).subscribe(() => {
      alert('Feedback submitted!');
    });
  }
}