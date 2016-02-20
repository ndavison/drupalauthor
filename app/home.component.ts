/**
 *
 *
 *
 *
 */

import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {DrupalService} from './drupal.service';
import 'rxjs/Rx';

@Component({
	selector: 'app-home',
	templateUrl: './views/home.html',
	providers: [DrupalService],
	directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent {

};
