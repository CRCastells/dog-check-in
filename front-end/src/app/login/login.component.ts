import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Http } from '@angular/http';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

	user = null;
	userInfo: any;

  constructor(private authService: AuthService, private router: Router, private http: Http, private apiService: ApiService) { 

 }

 signInWithGoogle() {
 	this.authService.signInWithGoogle()
 	.then((res) => {
 		this.userInfo = JSON.parse(window.localStorage[Object.keys(window.localStorage)[0]])
 		let newUser = res.additionalUserInfo;
 		let firebaseId = this.userInfo.uid;
 		// console.log(newUser);
 		let userObject = {
 			firebase_id: firebaseId,
 			name: newUser.profile.name,
 			email: newUser.profile.email,
 			image: newUser.profile.picture
 		}
 		if(newUser.isNewUser) {
 			this.apiService.createUser(userObject)
 			.subscribe(res => {
 				// console.log(res.json());
 			})
 		}
 		this.router.navigateByUrl('/map')
 	})
 	.catch((err) => console.log(err));
 }

  ngOnInit() {
  }

}
