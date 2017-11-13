import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	test: any;
  
  constructor(){}

  ngOnInit() {
  	this.test = 'hello from the appComponent!!!';
  }


}
