import {Component} from '@angular/core';
import {ModalDialogParams} from "nativescript-angular/directives/dialogs";
import {Page} from "ui/page";
import {topmost} from "ui/frame";

@Component({
    selector: 'login-form',
    templateUrl: "pages/login/login-form.html",
    styleUrls: ["pages/login/login-form.css"]

})
export class loginForm {
    public prompt: string;
    page: Page;
    ngOnInit() {
       /* this.animate({
            translate: { x: 100, y: 100 },
            duration: 1000
        })*/
    }
    constructor(private params: ModalDialogParams) {
        console.log("ModalContent.constructor: " + JSON.stringify(params));
        this.prompt = params.context.promptMsg;
    }

    public close(res: string) {
        this.params.closeCallback(res);
    }

    ngOnDestroy() {
        console.log("ModalContent.ngOnDestroy");
    }
}