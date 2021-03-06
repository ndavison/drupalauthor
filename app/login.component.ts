/**
 *
 *
 *
 *
 */

import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {DrupalService} from './drupal.service';

@Component({
	selector: 'app-login',
	templateUrl: './views/login.html'
})
export class LoginComponent {

	public username: string;
	public password: string;
	public loginForm: NgForm;

	constructor(private _drupal: DrupalService) {}

	onSubmit(ev: any): void {
		ev.preventDefault();
		this._drupal.authenticate(this.username, this.password);
	};
};
