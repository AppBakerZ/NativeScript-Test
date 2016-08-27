"use strict";
var core_1 = require("@angular/core");
var frame_1 = require("ui/frame");
var router_1 = require("nativescript-angular/router");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var login_form_1 = require("./login-form");
var LoginPage = (function () {
    function LoginPage(_router, modal) {
        this._router = _router;
        this.modal = modal;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.page = frame_1.topmost().currentPage;
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "~/images/backgroundPng.png";
    };
    ;
    LoginPage.prototype.submit = function () {
        this._router.navigate(["/list"], {
            transition: {
                name: "slide",
                duration: 300,
                curve: "linear"
            }
        });
    };
    LoginPage.prototype.login = function (fullscreen) {
        console.log("method called");
        var options = {
            context: { promptMsg: "This is the prompt message!" },
            fullscreen: fullscreen
        };
        this.modal.showModal(login_form_1.loginForm, options).then(function (res) {
            console.log("modal closed");
        });
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "pages/login/login.html",
            directives: [dialogs_1.ModalDialogHost],
            providers: [dialogs_1.ModalDialogService],
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
        }), 
        __metadata('design:paramtypes', [router_1.RouterExtensions, dialogs_1.ModalDialogService])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=login.component.js.map