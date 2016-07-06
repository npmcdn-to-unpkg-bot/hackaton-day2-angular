import { Component } from '@angular/core';
// import { ROUTER_DIRECTIVES } from '@angular/router';
import { User } from './user-model';

@Component({
  selector: 'my-dummy',
  templateUrl: 'app/components/user.component.html'
})
export class DetailsComponent {

    user: User;
    
	constructor() {
        this.user = new User;
        this.user.firstName = 'Yorick';
        this.user.id = 1;
        this.user.lastName = 'Horrie';
	}
}
