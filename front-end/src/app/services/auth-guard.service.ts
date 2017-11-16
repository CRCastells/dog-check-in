import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService {

  constructor(
  	private authService: AuthService,
  	private router: Router
  ) {}

// authGaurd to only allow logged in users to navigate.
  canActivate(){
  	if(!this.authService.isLoggedIn()) {
  		this.router.navigateByUrl('');
  	} else {
  		return true;
  	}
  }


}
