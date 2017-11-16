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

  oneUser:any;
  image: string = 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg';

  constructor(
  	private apiService: ApiService,
  	private appComponent: AppComponent,
  	private authService: AuthService
  	) { }

  ngOnInit() {
  	
    this.oneUser = JSON.parse(window.localStorage[Object.keys(window.localStorage)[0]]);
	
  }

}
