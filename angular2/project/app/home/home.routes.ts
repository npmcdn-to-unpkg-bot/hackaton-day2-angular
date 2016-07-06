import { RouterConfig }         from '@angular/router';
import { HomeComponent }     		from './home.component';
import { DummyComponent }     from '../dummy.component';
import { QuotationsComponent }     from '../components/quotations.component';
import { FeedbackComponent }     from '../components/feedback.component';
import { DetailsComponent }     from '../components/details.component';

export const HomeRoutes: RouterConfig = [
  { path: '', redirectTo: '/home', terminal: true },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: DummyComponent
      },
      {
        path: 'quotations',
        component: QuotationsComponent
      },
      {
        path: 'feedback',
        component: FeedbackComponent
      },
      {
        path: 'details',
        component: DetailsComponent
      }

    ]
  }
];