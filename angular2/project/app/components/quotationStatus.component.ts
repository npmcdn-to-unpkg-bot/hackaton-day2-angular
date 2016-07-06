import { Component, Input } from '@angular/core';

@Component({
  selector: 'quotation-status',
  template: `<span>
        {{getLabel()}}
    </span>`
})
export class QuotationStatusComponent {
	@Input() quotationItem;

	getLabel() {
	    if (this.quotationItem.accepted) {
	        return 'ACCEPTED';
	    }

	    return 'PENDING';
	}
}
