import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	public navs: Array<{ title: string, route: string }>;
	public hasLogin : boolean = false;

	constructor() { }

	ngOnInit() {
		this.navs = [
			{
				title: 'Explore', // Home
				route: ''
			},
			{
				title: 'Photo Stories',
				route: 'photos'
			},
			// {
			// 	title: 'My Souls',
			// 	route: 'my-souls'
			// }
		];
		// this.checkLogin();
	}

	onLogOut() {
		localStorage.removeItem('user');
	}

	// checkLogin() {
	// 	if (localStorage.getItem('user')) {
	// 		this.hasLogin = true
	// 	}
	// }

}
