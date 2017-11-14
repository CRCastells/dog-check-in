import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService {

  constructor(
  	private authService: AuthService,
  	private router: Router
  ) {}

  canActivate(){
  	if(!this.authService.isLoggedIn()) {
  		this.router.navigateByUrl('');
  	} else {
  		return true;
  	}
  }


}
