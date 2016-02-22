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

	constructor(private _http: Http, private config: Config) {}

	getToken() {
		return this._http.post(this.config.drupalRoot + 'rest/session/token', '').toPromise().then(res => res.text());
	}

	private _makeGetWithToken(url: string): Promise<string> {
		return this.getToken()
				.then(token => {
					var headers = new Headers();
					headers = this._addTokenToHeader(token, headers);
					return this._http.get(this.config.drupalRoot + url, {headers: headers}).toPromise();
				})
				.then(res => res.json());
	}

	private _makePostWithToken(url: string, body: string = ''): Promise<any> {
		return this.getToken()
				.then(token => {
					var headers = new Headers();
					headers = this._addTokenToHeader(token, headers);
					return this._http.post(this.config.drupalRoot + url, body, {headers: headers}).toPromise();
				})
				.then(res => res.json());
	}

	private _addTokenToHeader(token: string, headers: Headers): Headers {
		headers.append('x-csrf-token', token);
		return headers;
	}

	getContentTypes(): Promise<any> {
		return this._makeGetWithToken('entity/node/bundles?_format=hal_json');
	}

	getFields(bundle: string): Promise<any> {
		return this._makeGetWithToken('entity/node/' + bundle + '/fields?_format=hal_json');
	}

	saveNode() {}

	deleteNode() {}

	authenticate(username: string, password: string): Promise<any> {
		return this._makePostWithToken('user/login', 'user=' + username + '&pass=' + password + '&form_id=user_login_form');
	}

	logout(): Promise<any> {
		return this._makePostWithToken('user/logout');
	}

};
