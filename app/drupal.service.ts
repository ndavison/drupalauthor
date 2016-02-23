/**
 *
 *
 *
 *
 */

import {Component, Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Config} from './config';
import {Node} from './node';

@Injectable()
export class DrupalService {

	constructor(private _http: Http, private config: Config) {}

	getToken() {
		return this._http.post(this.config.drupalRoot + 'rest/session/token', '').toPromise().then(res => res.text());
	}

	private _makeGetWithToken(url: string): Promise<Object> {
		return this.getToken()
				.then(token => {
					var headers = new Headers();
					headers = this._addTokenToHeader(token, headers);
					return this._http.get(this.config.drupalRoot + url, {headers: headers}).toPromise();
				})
				.then(res => res.json());
	}

	private _makePostWithToken(url: string, body: any = ''): Promise<Object> {
		return this.getToken()
				.then(token => {
					var headers = new Headers();
					headers = this._addTokenToHeader(token, headers);
					if (body.title) {
						body = JSON.stringify(body);
						headers.append('Content-type', 'application/hal+json');
						headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
					}
					return this._http.post(this.config.drupalRoot + url, body, {headers: headers}).toPromise();
				})
				.then(res => {
					if (res.totalBytes > 0) {
						return res.json();
					} else {
						return res.text();
					}
				});
	}

	private _addTokenToHeader(token: string, headers: Headers): Headers {
		headers.append('x-csrf-token', token);
		return headers;
	}

	getContentTypes(): Promise<Object> {
		return this._makeGetWithToken('entity/node/bundles?_format=hal_json');
	}

	getFields(bundle: string): Promise<Object> {
		return this._makeGetWithToken('entity/node/' + bundle + '/fields?_format=hal_json');
	}

	saveNode(node: Node, bundle: string): Promise<Object> {
		var url = 'entity/node';
		if (node.nid) {
			url += '/' + node.nid;
		}
		node._links = {"type": {"href": this.config.drupalRoot + 'rest/type/node/' + bundle}};
		node.type = [{"target_id": bundle}];
		return this._makePostWithToken(url + '?_format=hal_json', node);
	}

	deleteNode() {}

	authenticate(username: string, password: string): Promise<any> {
		return this._makePostWithToken('user/login', 'user=' + username + '&pass=' + password + '&form_id=user_login_form');
	}

	logout(): Promise<any> {
		return this._makePostWithToken('user/logout');
	}

};
