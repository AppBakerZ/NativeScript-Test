import {Component} from "@angular/core";
import {topmost} from "ui/frame";
import {Page} from "ui/page";
import {Router} from "@angular/router";
import { RouterExtensions} from "nativescript-angular/router";
import { ModalDialogService, ModalDialogOptions, ModalDialogHost, ModalDialogParams } from "nativescript-angular/directives/dialogs";
import {loginForm} from "./login-form"
@Component({
    selector: "my-app",
    templateUrl: "pages/login/login.html",
    directives: [ModalDialogHost],
    providers: [ModalDialogService],
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginPage {
    page: Page;
    ngOnInit() {
        this.page = <Page>topmost().currentPage;
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "~/images/backgroundPng.png";
    }
    constructor(private _router: RouterExtensions,private modal: ModalDialogService){

    };
    submit() {
        this._router.navigate(["/list"], {
            transition: {
                name: "slide",
                duration: 300,
                curve: "linear"
            }
        });
    }
    login(fullscreen : boolean){
        console.log("method called");
        var options: ModalDialogOptions = {
            context: { promptMsg: "This is the prompt message!" },
            fullscreen: fullscreen
        };

        this.modal.showModal(loginForm, options).then((res: string) => {
           console.log("modal closed");
        });
    }
}