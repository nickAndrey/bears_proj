import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-delivery',
	templateUrl: './delivery.component.html',
	styleUrls: ['./delivery.component.scss'],
})
export class DeliveryComponent implements OnInit {
	form: FormGroup;

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.initForm();
	}

	initForm() {
		this.form = this.fb.group({
			name: ['', Validators.required],
			user_name: ['', Validators.required],
			password: ['', Validators.required],
		});
	}

	validateLoginForm(controlName: string): boolean {
		const control = this.form.controls[controlName];
		const validateResult = control.invalid && control.touched;
		return validateResult;
	}

	onSubmit() {
		const controls = this.form.controls;
		if (this.form.invalid) {
			Object.keys(controls).forEach((controlName) => controls[controlName].markAsTouched());
			return;
		}
	}
}
