import { Component, Input } from '@angular/core';
import { QuotationStatusComponent } from './quotationStatus.component';

@Component({
  selector: 'quotation-item',
  directives: [QuotationStatusComponent],
  template: `<div>
        <h2>{{quotationItem.title}}</h2>
        <p>Status: <quotation-status [quotationItem]="quotationItem"></quotation-status></p>
    </div>`
})
export class QuotationItemComponent {
	@Input() quotationItem;
}
