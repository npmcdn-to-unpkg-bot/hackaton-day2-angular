import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FeedbackService } from '../services/feedback.service';
import { FeedbackItemComponent } from './feedbackItem.component';
import { FeedbackInput } from './feedbackInput.component';

@Component({
  selector: 'my-feedback',
  directives: [FeedbackItemComponent, FeedbackInput],
  template: `<div>
  				<div>Feedback</div>
  				<feedback-item *ngFor="let feedbackItem of feedbackService.feedback" [feedbackItem]="feedbackItem"></feedback-item>
  				<feedback-input (addFeedback)="addFeedback($event)"></feedback-input>
  			</div>`
})

export class FeedbackComponent {

	constructor(public feedbackService: FeedbackService) {}

	addFeedback(event){
		console.log(event);
	}
}