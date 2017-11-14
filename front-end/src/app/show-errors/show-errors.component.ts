import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl, NgForm } from '@angular/forms';

@Component({
  selector: 'show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ShowErrorsComponent implements OnInit {

	private static readonly errorMessages = {
		'required': () => 'This field is required',
		'pattern': (params) => 'The required pattern is: ' + params.requiredPattern
	};

	@Input()
	control: AbstractControlDirective | AbstractControl;

	shouldShowErrors(): boolean {
		return this.control &&
		this.control.errors &&
		(this.control.dirty || this.control.touched);
	}

	listOfErrors(): string [] {
		return Object.keys(this.control.errors)
			.map(field => this.getMessage(field, this.control.errors[field]));
	}

	private getMessage(type: string, params: any) {
		return ShowErrorsComponent.errorMessages[type](params);
	}

  constructor() { }

  ngOnInit() {
  }

}
