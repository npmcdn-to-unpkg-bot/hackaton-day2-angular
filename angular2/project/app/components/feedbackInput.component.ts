import { Component, Output } from '@angular/core';

@Component({
  selector: 'feedback-input',
  directives: [],
  template: `<input  text="input" [(ngModel)]="feedback"/><button (onClick)="submit()">submit</button>`
})

export class FeedbackInput {
	@Output() addFeedback;
	feedback;

	submit(){
		console.log(this.feedback);
		this.addFeedback.emit(this.feedback);
	}
}