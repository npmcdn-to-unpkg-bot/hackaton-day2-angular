import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserService } from './services/user-service';

@Component({
  selector: 'my-app',
  providers: [UserService],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'templates/main.html',
  styleUrls: []
})
export class AppComponent {

	constructor() {

	}
}