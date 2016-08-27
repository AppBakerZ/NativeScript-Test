import {Component} from "@angular/core";
import {Page} from "ui/page";
import {topmost} from "ui/frame";

@Component({
    selector: "list",
    templateUrl: "pages/list/list.html",
    styleUrls: ["pages/list/list.css"]
})
export class ListPage {
    page: Page;
    ngOnInit() {
        console.log("ngInit called");
        this.page = <Page>topmost().currentPage;
        this.page.actionBarHidden = true;
        console.log(this.page.actionBarHidden );
        this.page.backgroundImage = "~/images/backgroundPng.png";
    }
}