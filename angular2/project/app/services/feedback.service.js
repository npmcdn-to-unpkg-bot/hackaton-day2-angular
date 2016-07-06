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
var feedback_model_1 = require('../components/feedback-model');
var FeedbackService = (function () {
    function FeedbackService() {
        this.feedback = [new feedback_model_1.Feedback("firstMessage"), new feedback_model_1.Feedback("secondMessage")];
    }
    FeedbackService.prototype.getFeedback = function () {
        return this.feedback;
    };
    FeedbackService.prototype.addFeedbackByMessage = function (message) {
        this.newFeedback = new feedback_model_1.Feedback(message);
        this.feedback.push(this.newFeedback);
    };
    FeedbackService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FeedbackService);
    return FeedbackService;
}());
exports.FeedbackService = FeedbackService;
