import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dog-new',
  templateUrl: './dog-new.component.html',
  styleUrls: ['./dog-new.component.css']
})
export class DogNewComponent implements OnInit {

  @ViewChild('newDogForm')
  newDogForm: NgForm;

	newDog = {
    name: '',
    breed: '',
    fixed: true,
    description: '',
    age: 0,
    image: ''
  };

  constructor(
  	private apiService : ApiService,
    private router: Router,
    private ngForm: NgForm
  ) { }

  ngOnInit() {
    console.log(JSON.parse(window.localStorage[Object.keys(window.localStorage)[0]]));
  }

  register(newDogForm: NgForm) {
    console.log(newDogForm);
  }

  saveDog(newDog){
    this.apiService.getOneUser(JSON.parse(window.localStorage[Object.keys(window.localStorage)[0]]).uid)
    .subscribe(res => {
      let user = res.json();
      newDog.userId = user.id;
      this.apiService.createDog(newDog)
      .subscribe(res => {
        this.router.navigateByUrl('profile');
      });
    });         
  }  
}
