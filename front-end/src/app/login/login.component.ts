import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Http } from '@angular/http';
import { ApiService } from '../services/api-service.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

	user = null;
	userInfo: any;
	email: any;
	password: any;
  name: string;

  constructor(private authService: AuthService, private router: Router, private http: Http, private apiService: ApiService) { 

 }

 // Verification of Google SignIn

 signInWithGoogle() {
 	this.authService.signInWithGoogle()
 	.then((res) => {
 		// this.userInfo = JSON.parse(window.localStorage[Object.keys(window.localStorage)[0]])
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

 emailSignUp() {
    this.authService.emailSignUp(this.email, this.password)
    .then((res) => {
    	console.log(res);
      let firebaseId = res.G;
      // console.log(newUser);
      let userObject = {
        firebase_id: firebaseId,
        name: this.name,
        email: res.email,
        image: 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg'
      }
        this.apiService.createUser(userObject)
        .subscribe(res => {
          // console.log(res.json());
        })
      this.router.navigateByUrl('/map')
    })
    this.email,this.password = '';
  }

  emailLogin() {
    this.authService.emailLogin(this.email, this.password)
    .then((res) => {
    	console.log(res);
      this.router.navigateByUrl('/map')
    })
	this.email,this.password = '';


  }



  ngOnInit() {
  }

}
