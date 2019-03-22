import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

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
	{
		path:'auth',
		loadChildren:'./auth/auth.module#AuthModule'
	},
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
