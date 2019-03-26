import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	// public hasError : boolean = false;

	constructor(
		private router : Router
	) { }

	ngOnInit() {
		// this.checkLogin();
	}

	onLogin( name: string, password : string) {

		let users = JSON.parse(localStorage.getItem('users'));
		users.map((user) => {
			if (user.name === name && user.password === password ) {
				this.router.navigate(['photos']);
				// this.hasError = true;
				localStorage.setItem('hasLogin', '1');
			}
		});

	}
}
