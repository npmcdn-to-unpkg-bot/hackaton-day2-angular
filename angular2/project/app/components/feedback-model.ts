export class Feedback {
    public id: number;

    constructor(public message:string = ""){
    	this.id = new Date().getTime();
    }
}
