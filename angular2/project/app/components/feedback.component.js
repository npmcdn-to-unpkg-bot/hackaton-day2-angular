"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var feedback_service_1 = require('../services/feedback.service');
var feedbackItem_component_1 = require('./feedbackItem.component');
var feedbackInput_component_1 = require('./feedbackInput.component');
var searchFeedback_component_1 = require('./searchFeedback.component');
var searchPipe_1 = require('./searchPipe');
var FeedbackComponent = (function () {
    function FeedbackComponent(feedbackService) {
        this.feedbackService = feedbackService;
        this.term = "";
    }
    FeedbackComponent.prototype.addFeedback = function (event) {
        this.feedbackService.addFeedbackByMessage(event);
    };
    FeedbackComponent.prototype.updateSearch = function (term) {
        this.term = term;
    };
    FeedbackComponent = __decorate([
        core_1.Component({
            selector: 'my-feedback',
            pipes: [searchPipe_1.SearchPipe],
            directives: [feedbackItem_component_1.FeedbackItemComponent, feedbackInput_component_1.FeedbackInput, searchFeedback_component_1.SearchFeedback],
            template: "<div>\n  \t\t\t\t<div>Feedback</div>\n  \t\t\t\t<search-feedback (setSearch)=\"updateSearch($event)\"></search-feedback>\n  \t\t\t\t<feedback-item *ngFor=\"let feedbackItem of feedbackService.feedback | search : term\" [feedbackItem]=\"feedbackItem\"></feedback-item>\n  \t\t\t\t<feedback-input (addFeedback)=\"addFeedback($event)\"></feedback-input>\n  \t\t\t</div>"
        }), 
        __metadata('design:paramtypes', [feedback_service_1.FeedbackService])
    ], FeedbackComponent);
    return FeedbackComponent;
}());
exports.FeedbackComponent = FeedbackComponent;
