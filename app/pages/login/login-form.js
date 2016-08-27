"use strict";
var core_1 = require('@angular/core');
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var loginForm = (function () {
    function loginForm(params) {
        this.params = params;
        console.log("ModalContent.constructor: " + JSON.stringify(params));
        this.prompt = params.context.promptMsg;
    }
    loginForm.prototype.ngOnInit = function () {
        /* this.animate({
             translate: { x: 100, y: 100 },
             duration: 1000
         })*/
    };
    loginForm.prototype.close = function (res) {
        this.params.closeCallback(res);
    };
    loginForm.prototype.ngOnDestroy = function () {
        console.log("ModalContent.ngOnDestroy");
    };
    loginForm = __decorate([
        core_1.Component({
            selector: 'login-form',
            templateUrl: "pages/login/login-form.html",
            styleUrls: ["pages/login/login-form.css"]
        }), 
        __metadata('design:paramtypes', [dialogs_1.ModalDialogParams])
    ], loginForm);
    return loginForm;
}());
exports.loginForm = loginForm;
//# sourceMappingURL=login-form.js.map