import { Injectable } from '@angular/core';
@Injectable()
export class FeedbackService{
	feedback = [{"id":"1","message":"First messsage"},{"id":"2","message":"Second messsage"}];

	getFeedback(){
		return this.feedback;
	}
}