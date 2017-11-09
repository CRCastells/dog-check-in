import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private http :Http){}


  ngOnInit() {
  	this.http.get('http://localhost:3000/api/grabParks').subscribe(res => {
  		console.log(res.json());
  	})
  }


}
