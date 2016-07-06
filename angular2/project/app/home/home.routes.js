"use strict";
var home_component_1 = require('./home.component');
var dummy_component_1 = require('../dummy.component');
var quotations_component_1 = require('../components/quotations.component');
var feedback_component_1 = require('../components/feedback.component');
var details_component_1 = require('../components/details.component');
exports.HomeRoutes = [
    { path: '', redirectTo: '/home', terminal: true },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        children: [
            {
                path: '',
                component: dummy_component_1.DummyComponent
            },
            {
                path: 'quotations',
                component: quotations_component_1.QuotationsComponent
            },
            {
                path: 'feedback',
                component: feedback_component_1.FeedbackComponent
            },
            {
                path: 'details',
                component: details_component_1.DetailsComponent
            }
        ]
    }
];
