import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosRoutingModule } from './photos-routing.module';

import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';

@NgModule({
	declarations: [PhotoListComponent, PhotoDetailComponent],
	imports: [
		CommonModule,
		PhotosRoutingModule
	]
})
export class PhotosModule { }
