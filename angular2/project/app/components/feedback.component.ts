import { Component } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';
import { FeedbackItemComponent } from './feedbackItem.component';
import { FeedbackInput } from './feedbackInput.component';
import { SearchFeedback } from './searchFeedback.component';
import { SearchPipe } from './searchPipe';

@Component({
  selector: 'my-feedback',
  pipes: [SearchPipe],
  directives: [FeedbackItemComponent, FeedbackInput, SearchFeedback],
  template: `<div>
  				<div>Feedback</div>
  				<search-feedback (setSearch)="updateSearch($event)"></search-feedback>
  				<feedback-item *ngFor="let feedbackItem of feedbackService.feedback | search : term" [feedbackItem]="feedbackItem"></feedback-item>
  				<feedback-input (addFeedback)="addFeedback($event)"></feedback-input>
  			</div>`
})

export class FeedbackComponent {
	term = "";
	constructor(public feedbackService: FeedbackService) {}

	addFeedback(event){
		this.feedbackService.addFeedbackByMessage(event);
	}

	updateSearch(term){
		this.term = term;
	}
}