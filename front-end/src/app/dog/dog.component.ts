import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DogComponent implements OnInit {

	name :string = 'Fido';
	breed: string = 'Shiba';
	fixed: boolean = true;
	description: string = "The goodest of boys";
	age: number = 2;
	picture: string;


  constructor() { }

  ngOnInit() {
  }

}
