import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}