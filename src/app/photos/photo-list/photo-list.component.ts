import { Component, OnInit } from '@angular/core';
import { PhotoService } from './../photo.service';

@Component({
	selector: 'app-photo-list',
	templateUrl: './photo-list.component.html',
	styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

	constructor(
		private photoService : PhotoService
	) { }

	ngOnInit() {
		this.getCategoriesList();
	}

	getCategoriesList() {
		this.photoService.getAllData().subscribe(data => console.log(data))
	}
}
