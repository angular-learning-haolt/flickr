import { Component, OnInit } from '@angular/core';
import { PhotoService } from './../photo.service';

@Component({
	selector: 'app-photo-list',
	templateUrl: './photo-list.component.html',
	styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

	public restaurants : any[];
	public categories : any[];
	public categoryId : number = 0;

	constructor(
		private photoService : PhotoService
	) { }

	ngOnInit() {
		this.getCategoriesList();
		this.getAllRestaurants();
	}

	getCategoriesList() {
		this.photoService.getAllCategories().subscribe(data => {
			this.categories = data;
			// console.log(data)
		})
	}

	getAllRestaurants() {
		this.photoService.getAllRestaurants().subscribe(data => {
			this.restaurants = data;
		})
	}

	onSearch() {
		if (this.categoryId !== 0) {
			this.photoService.getRestaurantByCategory(+this.categoryId).subscribe(data => {
				this.restaurants = data;
				// console.log(this.restaurants)
			});
		}	
	}
}
