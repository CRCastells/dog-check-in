import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../services/api-service.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConnectionsComponent implements OnInit {

	connections: any;

  constructor(
  	private apiService: ApiService
  ) { }

  ngOnInit() {
  	this.apiService.getAllUsers().subscribe( res => {
      this.connections = res.json();
      console.log(this.connections);
    })
  }


}
