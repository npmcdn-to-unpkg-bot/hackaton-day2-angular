import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { QuotationsService } from '../services/quotations.service';
import { QuotationItemComponent } from '../components/quotationItem.component';

@Component({
  selector: 'my-quotations',
  directives: [QuotationItemComponent],
  template: `<div>
        <div>Quotations</div>
        <quotation-item [quotationItem]="quotation" *ngFor="let quotation of quotationsService.quotations">
        </quotation-item>
    </div>`
})
export class QuotationsComponent {

	constructor(public quotationsService: QuotationsService) {

	}
}
