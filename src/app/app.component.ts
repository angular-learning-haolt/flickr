import { Component, OnInit } from '@angular/core';

import { LoginService } from './auth/login.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	title = 'flickr';
	constructor(
		public loginService : LoginService
	) {}
	ngOnInit() {
		localStorage.setItem('users', JSON.stringify([{ name: 'admin', password: '123' }]));
		this.loginService.getCart().subscribe((data) => {
			console.log(data)
		});
		this.loginService.getStatusLogin().subscribe((data) => {
			console.log(data)
		});
	}
}
