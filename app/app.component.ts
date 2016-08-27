import {Component} from "@angular/core";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";
import {OpaqueToken} from '@angular/core';
export const PAGE: any = new OpaqueToken('page');

@Component({
    selector: "main",
    directives: [NS_ROUTER_DIRECTIVES],
    template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {}
