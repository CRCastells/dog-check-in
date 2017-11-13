import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dog-show',
  templateUrl: './dog-show.component.html',
  styleUrls: ['./dog-show.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DogShowComponent implements OnInit {
	
	oneDog = {
		name: 'fido',
		breed: 'shiba',
		fixed: true,
		description: 'the goodest of boys',
		age: 2,
		picture: 'http://truecompanionstraining.com/wp-content/uploads/good-dog-school.jpg'
	};

  constructor() { }

  ngOnInit() {
  }
}
