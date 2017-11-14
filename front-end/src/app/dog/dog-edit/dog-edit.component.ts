import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dog-edit',
  templateUrl: './dog-edit.component.html',
  styleUrls: ['./dog-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DogEditComponent implements OnInit {
	updatedDog = {
		name: 'fido',
		breed: 'shiba',
		fixed: true,
		description: 'the goodest of boys',
		age: 2,
		image: 'http://truecompanionstraining.com/wp-content/uploads/good-dog-school.jpg'
	};

  constructor() { }

  ngOnInit() {
  }
  updateDog(updatedDog) {

  }

}
