import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	test: any;
  
  constructor(private router: Router){}

  ngOnInit() {
  	this.test = 'hello from the appComponent!!!';
  }


}
