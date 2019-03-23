import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject,combineLatest, BehaviorSubject } from 'rxjs';
import { map, switchMap  } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})

export class PhotoService {

	

	public API: string = 'https://developers.zomato.com/api/v2.1/categories';
	public apiUrl: string = "https://developers.zomato.com/api/v2.1/";
  	public apiKey: string = "3f57537ef8bf80c54889ecb539f34230";

  	categoryFilter$:BehaviorSubject<string | void>;
  	pageFilter$:BehaviorSubject<number | void>;

  	constructor(
		public http : HttpClient
	) {
		this.categoryFilter$ = new BehaviorSubject('');
    	this.pageFilter$ = new BehaviorSubject(0);
	}

	getAllData()  {
		let header = this.buildHeader();
		return this.http.get(this.API, { headers: header });
	}


	private buildHeader(): HttpHeaders {
		let header = new HttpHeaders().set('user-key', this.apiKey);
		return header;
	}
}
export class Restaurant{
    id:string;
    name:string;
    cuisines:string;
    photos_url:string;
}

export class Category {
    name:string;
    id:number;
}