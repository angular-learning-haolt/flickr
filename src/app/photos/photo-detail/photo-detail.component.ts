import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from './../photo.service';

@Component({
	selector: 'app-photo-detail',
	templateUrl: './photo-detail.component.html',
	styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {

	public curentRestaurant :any;
	public rating :number;

	constructor(
		private activatedRoute : ActivatedRoute,
		private photoService : PhotoService
	) { }

	ngOnInit() {
		this.getCurrentRestaurant();
	}

	getCurrentRestaurant() {
		let curentID : number = (+this.activatedRoute.snapshot.params.id);
		this.photoService.getRestaurantById(curentID).subscribe(data => {
			this.curentRestaurant = data;
			console.log(data);
			this.rating = data['user_rating'].aggregate_rating;
		});
	}
}
