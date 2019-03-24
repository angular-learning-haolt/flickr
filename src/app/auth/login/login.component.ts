import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public hasError : boolean = false;

	constructor(
		private router : Router
	) { }

	ngOnInit() {
		this.checkLogin();
	}

	onLogin( name: string, password : string) {
		let user = {
			name: name,
			password: password
		};
		console.log(name, password);
		if (name == 'admin' && password == 'admin') {
			localStorage.setItem('user', JSON.stringify(user));
			this.router.navigate(['photos']);
		}
		else {
			this.hasError = true;
		}
	}

	checkLogin() {
		if (localStorage.getItem('user')) {
			this.router.navigate(['']);
		}
	}
}
