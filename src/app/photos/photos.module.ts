import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosRoutingModule } from './photos-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';

import { PhotoService } from './photo.service';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
	declarations: [
		PhotoListComponent, 
		PhotoDetailComponent, PhotosComponent
	],
	imports: [
		CommonModule,
		PhotosRoutingModule,
		HttpClientModule
	],
	providers: [
		PhotoService
	]
})
export class PhotosModule { }
