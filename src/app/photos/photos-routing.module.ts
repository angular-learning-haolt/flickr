import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photo-list/photo-list.component';

const photoRoutes: Routes = [
	{
    	path: '',
    	component: PhotoListComponent,
   //  	children: [
			// { 
			// 	path: '', 
			// 	component: SliderComponent 
			// }
	  //   ]
	}
];

@NgModule({
	imports: [RouterModule.forChild(photoRoutes)],
	exports: [RouterModule]
})
export class PhotosRoutingModule { }
