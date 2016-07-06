import { Pipe } from '@angular/core';
@Pipe({
	name:"search"
})
export class SearchPipe {
   transform(value, term){
    return value.filter((feedback)=>feedback.message.startsWith(term));
  }
}


