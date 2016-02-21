import { Component } from "angular2/core";
import { User } from '../models/user';

@Component({
    selector: 'signup',
    template: `
        <div class="container-fluid">
            <form class="form-horizontal">
                <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input  type="text"
                            required
                            [(ngModel)]="firstName"
                            class="form-control" />
                </div>
            </form>
        </div>
    `
})

export class Signup {
    firstName: string;
    lastName: string;
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;

    submitted: boolean = false;

    submitForm() {
        this.submitted = true;
    }
}