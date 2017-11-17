import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../services/api-service.service';
import { AppComponent } from '../app.component';
import { AuthService} from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  oneUser;

  constructor(
  	private apiService: ApiService,
  	private appComponent: AppComponent,
  	private authService: AuthService
  	) { }

  ngOnInit() {
  	// Profile page. Uses grabUser function from authService to ensure logged in user is displayed on profile. 
	this.apiService.getOneUser(this.authService.grabUser())
	.subscribe(response => {
		// console.log(response.json());
		this.oneUser = response.json();
	})
	
  }

}
