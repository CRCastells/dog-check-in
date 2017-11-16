import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Angular Firebase Imports
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {
	private user: Observable<firebase.User>;
	private userDetails: firebase.User = null;


  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) { 
		// sets user to confirm firebase authentication
    this.user = _firebaseAuth.authState;

		this.user.subscribe(
  		(user) => {
  			if (user) {
  				this.userDetails = user;
  				// console.log(this.userDetails);
  			}
  			else {
  			  	this.userDetails = null;
         		}
      	}
    	  );
    }
  
// Google Auth function that returns Google signin screen as a popup. 
signInWithGoogle() {
	return this._firebaseAuth.auth.signInWithPopup(
		new firebase.auth.GoogleAuthProvider()
		)
}

// Email Auth that is throwing an error and needs to be troubleshooted. 

emailSignUp(email: string, password: string) {
  return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Success!', value)
      return value;
    })
    .catch(err => {
      console.log('Error', err.message);
    });
}

emailLogin(email: string, password: string) {
  return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
  .then(value => {
    console.log('Sign in Success!');
  })
  .catch(err => {
    console.log('Sign in did not work', err.message)
  });
}

// function that pulls the user ID to ensure logged in user sees their profile.
grabUser() {
  return this.userDetails.uid;
}

// verifies the user is logged in. 
  isLoggedIn() {
  if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }

// Logged out function
  logout() {
    this._firebaseAuth.auth.signOut()
    .then((res) => this.router.navigateByUrl(''));
  }
}