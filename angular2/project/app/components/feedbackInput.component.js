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
var FeedbackInput = (function () {
    function FeedbackInput() {
    }
    FeedbackInput.prototype.submit = function () {
        console.log(this.feedback);
        this.addFeedback.emit(this.feedback);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FeedbackInput.prototype, "addFeedback", void 0);
    FeedbackInput = __decorate([
        core_1.Component({
            selector: 'feedback-input',
            directives: [],
            template: "<input  text=\"input\" [(ngModel)]=\"feedback\"/><button (onClick)=\"submit()\">submit</button>"
        }), 
        __metadata('design:paramtypes', [])
    ], FeedbackInput);
    return FeedbackInput;
}());
exports.FeedbackInput = FeedbackInput;
