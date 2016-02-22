/**
*
*
*
*
*/

import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Config} from './config';
import {HomeComponent} from './home.component';
import {HeaderComponent} from './header.component';
import {LoginComponent} from './login.component';
import {LogoutComponent} from './logout.component';
import {ContentTypesComponent} from './contenttypes.component';
import {NodeFormComponent} from './node-form.component';
import {DrupalService} from './drupal.service';

@Component({
	selector: 'app',
	templateUrl: './views/app.html',
	providers: [Config, DrupalService, ROUTER_PROVIDERS, HTTP_PROVIDERS],
	directives: [HeaderComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path: '/', name: 'Home', component: HomeComponent},
	{path: '/login', name: 'Login', component: LoginComponent},
	{path: '/logout', name: 'Logout', component: LogoutComponent},
	{path: '/create', name: 'ContentTypes', component: ContentTypesComponent},
	{path: '/nodeform/:bundle', name: 'NodeForm', component: NodeFormComponent},
])
export class AppComponent {



}