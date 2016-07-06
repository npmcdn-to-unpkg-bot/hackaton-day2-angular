import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'search-feedback',
  directives: [],
  template: `<input #input input="text" (input)="setSearch.emit(input.value)">`
})

export class SearchFeedback {
  @Output() setSearch = new EventEmitter();

}