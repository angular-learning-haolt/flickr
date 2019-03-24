import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotosComponent } from './photos/photos.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';

const photoRoutes: Routes = [
	// {
 //        path: '',
 //        redirectTo: '',
 //        pathMatch: 'full'
 //    },
	// {
 //    	path: '',
 //    	component: PhotoListComponent
	// },
	// {
 //        path: ':id',
 //        component: PhotoDetailComponent
 //    },
    {
		path:'',
		component: PhotosComponent,
		children: [
			{ 
				path: '',
				component: PhotoListComponent
			},
			{ 
				path: ':id',
				component: PhotoDetailComponent
			}
	  	]
	}
];

@NgModule({
	imports: [RouterModule.forChild(photoRoutes)],
	exports: [RouterModule]
})
export class PhotosRoutingModule { }
