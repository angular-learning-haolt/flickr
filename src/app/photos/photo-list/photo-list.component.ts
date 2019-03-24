import { Component, OnInit } from '@angular/core';
import { PhotoService } from './../photo.service';

@Component({
	selector: 'app-photo-list',
	templateUrl: './photo-list.component.html',
	styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

	public restaurants : any[];

	constructor(
		private photoService : PhotoService
	) { }

	ngOnInit() {
		// this.getCategoriesList();
		this.getAllRestaurants();
	}

	getCategoriesList() {
		this.photoService.getAllCategories().subscribe(data => console.log(data))
	}

	getAllRestaurants() {
		this.photoService.getAllRestaurants().subscribe(data => {
			this.restaurants = data;
			console.log(data);
		})
	}
}
