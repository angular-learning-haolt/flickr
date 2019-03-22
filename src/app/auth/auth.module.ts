import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth/auth.component';

// import { AuthGuard } from './auth.guard';

@NgModule({
	declarations: [LoginComponent, SignupComponent, AuthComponent],
	imports: [
		CommonModule,
		AuthRoutingModule
	],
	providers: [
	]
})
export class AuthModule { }
