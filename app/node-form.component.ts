/**
 *
 *
 *
 *
 */

import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {DrupalService} from './drupal.service';
import {Node} from './node';
import {Field} from './field';

@Component({
	selector: 'app-node-form',
	templateUrl: './views/node-form.html'
})
export class NodeFormComponent {

	public node: Node = {title: [{'value': ''}], type: ''};
	public nodeForm: NgForm;
	public bundle: string;
	public fields;

	constructor(private _drupal: DrupalService, private _routeParams: RouteParams) {}

	ngOnInit() {
		this.bundle = this._routeParams.get('bundle');
		this._drupal.getFields(this.bundle).then(fields => this.fields = fields);
	}

	onSubmit(ev: any): void {
		ev.preventDefault();
		this._drupal.saveNode(this.node, this.bundle).then(res => console.log(res));
	};
};
