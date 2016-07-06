import { Component, Input } from '@angular/core';

@Component({
  selector: 'feedback-item',
  template: '<div>{{feedbackItem.message}}</div>'
})
export class FeedbackItemComponent {
	@Input() feedbackItem;
}