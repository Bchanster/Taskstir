import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

import {Signup} from '../signup/signup';

@Component({
    selector: 'foodstir-app',
    template: `
        <div class="container-fluid">
            <h1>Welcome to Foodstir</h1>

            <h3>Sign up</h3>
            <a class="btn btn-primary" [routerLink]="['Signup']">Sign Up!</a>

            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/signup', name:'Signup', component: Signup}
])

export class Application { }