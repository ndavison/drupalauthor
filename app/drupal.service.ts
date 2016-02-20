/**
 *
 *
 *
 *
 */

import {Component, Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Config} from './config';

@Injectable()
export class DrupalService {

	private _headers = new Headers({'Authorization': 'Basic YWRtaW46YWRtaW4='});

	constructor(private http: Http, private config: Config) {}

	getContentTypes() {
		return this.http.get(this.config.drupalRoot + 'entity/node/bundles?_format=hal_json', {headers: this._headers}).map(res => res.json());
	}

	saveNode() {}

	authenticate() {}

	logout() {}

};
