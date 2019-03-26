import { Component, OnInit } from '@angular/core';
import { LoginService } from './../auth/login.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	public navs: Array<{ title: string, route: string }>;
	public hasLogin : string = '0';

	constructor(
		public loginService : LoginService,
		public router : Router,
	) { }

	ngOnInit() {
		this.navs = [
			{
				title: 'Explore', // Home
				route: ''
			},
			{
				title: 'Photo Stories',
				route: 'photos'
			}
		];
		this.loginService.getStatusLogin().subscribe((data) => {
			this.hasLogin = data;
		});
	}

	onLogOut() {
		this.hasLogin = '0';
		localStorage.setItem('hasLogin','0');
		this.router.navigate(['']);
	}
}
