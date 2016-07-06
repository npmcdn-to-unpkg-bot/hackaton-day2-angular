import { Component } from '@angular/core';
// import { ROUTER_DIRECTIVES } from '@angular/router';
import { User } from './user-model';
import {UserService} from "../services/user-service";

@Component({
  selector: 'my-dummy',
  templateUrl: 'templates/user-detail.html'
})
export class DetailsComponent {

    user: User;
    
	constructor(public userService:UserService) {
        this.userService.getUser().subscribe(
            user => this.user = user,
            error => console.log('Error: '+ error),
            () => console.log('Completed')
        );
	}
}
