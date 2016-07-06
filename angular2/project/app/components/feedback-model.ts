export class Feedback {
    id: number;
    message: string;

    constructor(public message:string = ""){
    	this.id = new Date().getTime();
    }
}
