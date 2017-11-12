import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

	user = null;

  constructor(private authService: AuthService, private router: Router, private http: Http) { 

 }

 signInWithGoogle() {
 	this.authService.signInWithGoogle()
 	.then((res) => {
 		console.log(res);
 		this.router.navigateByUrl('/map')
 	})
 	.catch((err) => console.log(err));
 }

  ngOnInit() {
  }

}
