import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	onSignUp(name: string, password: string) {
		console.log(name, password);
		let user = {
			name: name,
			password: password
		}
		this.addUser(user)
	}

	addUser(user) {
		if (localStorage.getItem('users')) {
			let users = JSON.parse(localStorage.getItem('users'));
			users.push(user);
			console.log(users);
			localStorage.setItem('users', JSON.stringify(users));
		}
	}
}
