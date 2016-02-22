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
	selector: 'app-logout',
	templateUrl: './views/logout.html'
})
export class LogoutComponent {

	constructor(private _drupal: DrupalService) {}

	onClick(ev: any): void {
		ev.preventDefault();
		this._drupal.logout();
	};
};
