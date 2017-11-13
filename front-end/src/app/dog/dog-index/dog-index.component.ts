import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-index',
  templateUrl: './dog-index.component.html',
  styleUrls: ['./dog-index.component.css'],
})
export class DogIndexComponent implements OnInit {

	dogs = [{
		name :'Fido',
		breed:'Shiba',
		fixed: true,
		description: "The goodest of boys",
		age: 2,
		picture: ''
	}]

  constructor() { }

  ngOnInit() {

  }



}
