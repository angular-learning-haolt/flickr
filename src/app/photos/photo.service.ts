import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PhotoService {

	constructor() { }

	public API : string = 'http://5982b2e834e4a300116fea0d.mockapi.io/api/todos';
}
