import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class GetProductsService {
	constructor(private http: HttpClient) {}

	public getUsersService() {
		return this.http.get('https://my.api.mockaroo.com/user-test.json?key=4f56cf20').pipe(map((data) => data));
	}
}
