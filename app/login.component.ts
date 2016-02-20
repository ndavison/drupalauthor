/**
 *
 *
 *
 *
 */

import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';

@Component({
	selector: 'app-login',
	templateUrl: './views/login.html'
})
export class LoginComponent {

	public username: string;
	public password: string;
	public loginForm: NgForm;
	public isAuthentication: boolean;

	onSubmit(ev: any): void {
		console.log([this.username, this.password]);
		ev.preventDefault();
	};
};
