import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'feedback-input',
  directives: [],
  template: `<input  text="input" [(ngModel)]="feedback"/><button (click)="submit()" >submit</button>`
})

export class FeedbackInput {
	@Output() addFeedback = new EventEmitter();
	feedback;

	submit(){
		this.addFeedback.emit(this.feedback);
		this.feedback = "";
	}
}