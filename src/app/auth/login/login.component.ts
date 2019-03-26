import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './../login.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public hasLogin : string = '0';

	constructor(
		private router : Router,
		private loginService : LoginService
	) { }

	ngOnInit() {
	}

	onLogin( name: string, password : string) {

		let users = JSON.parse(localStorage.getItem('users'));
		users.map((user) => {
			if (user.name === name && user.password === password ) {
				this.router.navigate(['photos']);
				this.hasLogin = '1';
				localStorage.setItem('hasLogin', this.hasLogin);
			}
		});
		// this.loginService.addCard();
		this.loginService.changeStatusToLogin();
	}
}
