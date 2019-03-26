import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	public hasLogin : BehaviorSubject<string>;
	public cardSbj : BehaviorSubject<any[] | 0 >; // Example of Mr.Dan
	constructor(
	) {

		this.cardSbj = new BehaviorSubject(null);
		this.hasLogin = new BehaviorSubject('0');
	}

	addCard() {
		this.cardSbj.next(['Observable is so difficult :(( . This is example getCart addCart Mr.Dan guided me. 22/03. Hic :']);
	}

	getCart() {
		return this.cardSbj;
	}

	// saveToLocalStorage(key: string, value: string) {
	// 	localStorage.setItem(key, value);
	// }

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
