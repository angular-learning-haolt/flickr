import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	
	public hasLogin : BehaviorSubject<string>;

	constructor(
	) {
		this.hasLogin = new BehaviorSubject('0');
	}

	changeStatusToLogin() {
		this.hasLogin.next('1');
	}

	changeStatusToLogOut() {
		this.hasLogin.next('0');
	}

	getStatusLogin() {
		return this.hasLogin;
	}
}
