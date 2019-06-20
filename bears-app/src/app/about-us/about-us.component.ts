import { Component, OnInit } from '@angular/core';
import { GetProductsService } from '../services/get-products.service';

@Component({
	selector: 'app-about-us',
	templateUrl: './about-us.component.html',
	styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
	users: any = [];

	constructor(private httpUsers: GetProductsService) {}

	ngOnInit() {
		this.httpUsers.getUsersService().subscribe((data) => {
			this.users = data;
		});
	}
}
