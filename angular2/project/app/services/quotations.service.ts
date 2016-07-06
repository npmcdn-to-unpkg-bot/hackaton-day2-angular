import { Injectable } from '@angular/core';
@Injectable()

export class QuotationsService {
	quotations = [{
	    id: 1,
	    title: 'test 1',
	    accepted: true
	}, {
	    id: 2,
	    title: 'test 2',
	    accepted: false
	}];
}
