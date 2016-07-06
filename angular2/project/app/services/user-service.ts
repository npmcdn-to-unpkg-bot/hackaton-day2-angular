import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import {User} from "../components/user-model";
import {Subscription} from "rxjs/Subscription";

@Injectable()
export class UserService {
    constructor (private http: Http) {}
    user: User;
    
    private userUrl = 'user.json';

    getUser(): Observable {
        return this.http.get(this.userUrl).map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}