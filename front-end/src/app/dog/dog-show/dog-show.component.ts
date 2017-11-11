import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dog-show',
  templateUrl: './dog-show.component.html',
  styleUrls: ['./dog-show.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DogShowComponent implements OnInit {
	
	oneDog: object = {
		name :'Fido',
		breed:'Shiba',
		fixed: true,
		description: "The goodest of boys",
		age: 2,
		picture: ''
	}

  constructor() { }

  ngOnInit() {
  }
}
