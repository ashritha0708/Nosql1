import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { FeedbackService } from '../services/feedback/feedback.service';
import { FeedbackFormComponent } from './feedback.component';

describe('FeedbackFormComponent', () => {
  let component: FeedbackFormComponent;
  let fixture: ComponentFixture<FeedbackFormComponent>;
  let feedbackServiceSpy: jasmine.SpyObj<FeedbackService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('FeedbackService', ['postFeedback']);

    await TestBed.configureTestingModule({
      declarations: [FeedbackFormComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [{ provide: FeedbackService, useValue: spy }]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbackFormComponent);
    component = fixture.componentInstance;
    feedbackServiceSpy = TestBed.inject(FeedbackService) as jasmine.SpyObj<FeedbackService>;
    fixture.detectChanges();
  });

  it('should create the feedback component', () => {
    expect(component).toBeTruthy();
  });

  it('should call postFeedback() on submitFeedback()', () => {
    const mockFeedback = {
      userId: 'user123',
      message: 'Excellent service',
      rating: 9
    };

    component.feedback = mockFeedback;
    feedbackServiceSpy.postFeedback.and.returnValue(of(mockFeedback));

    component.submitFeedback();

    expect(feedbackServiceSpy.postFeedback).toHaveBeenCalledWith(mockFeedback);
  });
});