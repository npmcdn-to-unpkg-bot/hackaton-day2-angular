// main entry point
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './app.routes';
// Add these symbols to override the `LocationStrategy`
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AppComponent } from './app.component';
import { FeedbackService } from './services/feedback.service';
import { QuotationsService } from './services/quotations.service';

bootstrap(AppComponent, [
	HTTP_PROVIDERS,
	APP_ROUTER_PROVIDERS,
	disableDeprecatedForms(),
 	provideForms(),
	{ provide: LocationStrategy, useClass: HashLocationStrategy }, 
	FeedbackService,
	QuotationsService
])
.catch(err => console.error(err));
