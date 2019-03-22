import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
// import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
	{
        path: '',
        loadChildren:'./home/home.module#HomeModule'
    },
	{
		path:'home',
		redirectTo: '',
        pathMatch: 'full'
	},
	// {
	// 	path:'login',
	// 	component: LoginComponent
	// },
	// {
 //        path: '',
 //        redirectTo: 'home',
 //        pathMatch: 'full'
 //    },
	{
		path:'photos',
		loadChildren:'./photos/photos.module#PhotosModule'
	},
	{
		path:'**',
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
