import { Injectable } from '@angular/core';
import { Feedback } from '../components/feedback-model';

@Injectable()
export class FeedbackService{
	feedback = [new Feedback("firstMessage"),new Feedback("secondMessage")];
	getFeedback(){
		return this.feedback;
	}

	addFeedbackByMessage(message){
		this.newFeedback = new Feedback(message);
		this.feedback.push(this.newFeedback);
	}
}