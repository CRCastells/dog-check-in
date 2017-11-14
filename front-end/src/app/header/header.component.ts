import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {



  constructor(private authService : AuthService){}

	logout() {
		this.authService.logout()
	}

  ngOnInit() {
  }

}
