import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FeedbackService } from '../services/feedback.service';
import { FeedbackItemComponent } from './feedbackItem.component';

@Component({
  selector: 'my-feedback',
  directives: [FeedbackItemComponent],
  template: `<div>
  				<div>Feedback</div>
  				<span *ngFor="let feedbackItem of feedbackService.feedback">
  					<feedback-item [feedbackItem]="feedbackItem"></feedback-item>
  				</span>
  			</div>`
})

export class FeedbackComponent {

	constructor(public feedbackService: FeedbackService) {
	}


}