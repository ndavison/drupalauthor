/**
 *
 *
 *
 *
 */

import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {DrupalService} from './drupal.service';
import 'rxjs/Rx';

@Component({
	selector: 'app-contenttypes',
	templateUrl: './views/contenttypes.html',
	directives: [ROUTER_DIRECTIVES]
})
export class ContentTypesComponent {

	public types;

	constructor(private _drupal: DrupalService) {}

	ngOnInit() {
		this._drupal.getContentTypes().then(types => this.types = _.keys(types));
	}

	contentTypes() {
		return this.types;
	}
};
