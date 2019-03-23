import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject,combineLatest, BehaviorSubject } from 'rxjs';
import { map  } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})

export class PhotoService {

	public apiUrl: string = 'https://developers.zomato.com/api/v2.1';
  	public apiKey: string = "dc02cf53cca4e18093ce0b1d7dac9957";

  	constructor(
		public http : HttpClient
	) {

	}

	// Đoạn <{ categories: Array<any>}> là mô tả dạng dữ liệu của cái lấy về :))? xong bên dưới .categories mới ko lỗi
	getAllCategories()  {
		return this.http.get<{ categories: Array<any>}>(this.buildApiUrl('categories'), { headers: this.buildHeader() })
						.pipe(map(data => {
							return data.categories.map(cate => {
								return cate.categories
							})
						}));
	}

	getAllRestaurants() {

	}

	// Create apiURL for every target
	private buildApiUrl(target) {
		return `${this.apiUrl}/${target}`;
	}

	private buildHeader() : HttpHeaders {
		let header = new HttpHeaders().set('user-key', this.apiKey);
		return header;
	}
}

export class Category {
    name:string;
    id:number;
}