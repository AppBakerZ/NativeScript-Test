"use strict";
var core_1 = require("@angular/core");
var frame_1 = require("ui/frame");
var ListPage = (function () {
    function ListPage() {
    }
    ListPage.prototype.ngOnInit = function () {
        console.log("ngInit called");
        this.page = frame_1.topmost().currentPage;
        this.page.actionBarHidden = true;
        console.log(this.page.actionBarHidden);
        this.page.backgroundImage = "~/images/backgroundPng.png";
    };
    ListPage = __decorate([
        core_1.Component({
            selector: "list",
            templateUrl: "pages/list/list.html",
            styleUrls: ["pages/list/list.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], ListPage);
    return ListPage;
}());
exports.ListPage = ListPage;
//# sourceMappingURL=list.component.js.map