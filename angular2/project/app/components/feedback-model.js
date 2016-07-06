"use strict";
var Feedback = (function () {
    function Feedback(message) {
        if (message === void 0) { message = ""; }
        this.message = message;
        this.id = new Date().getTime();
    }
    return Feedback;
}());
exports.Feedback = Feedback;
