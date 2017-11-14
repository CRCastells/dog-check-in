import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  user: any;


  constructor(private authService : AuthService){}

	logout() {
		this.authService.logout()
	}

  ngOnInit() {
    this.user = JSON.parse(window.localStorage[Object.keys(window.localStorage)[0]]);
    console.log(this.user);
  }

}
