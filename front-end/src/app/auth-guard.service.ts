import { Injectable } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService {

  constructor(
  	private authService: AuthService,
  	private router: Router
  ) {}

  canActivate(){
  	if(!this.authService.isLoggedIn()) {
  		this.router.navigate(['']);
  	} else {
  		return true;
  	}
  }


}
