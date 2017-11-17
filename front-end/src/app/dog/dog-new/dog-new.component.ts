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
  dogNewForm: NgForm;

  	newDog = {
      name: '',
      breed: '',
      fixed: true,
      description: '',
      age: 0,
      image: '',
      userId: 0
    };

  constructor(
  	private apiService : ApiService,
    private router: Router,
    private ngForm: NgForm
  ) { }

  ngOnInit() {

  }
  
  // New Dog. Only allows new dog creation based on user that owns dog. 
  saveDog(dogNewForm : NgForm){
    this.newDog = dogNewForm.form.value;
    this.apiService.getOneUser(JSON.parse(window.localStorage[Object.keys(window.localStorage)[0]]).uid)
    .subscribe(res => {
      let user = res.json();
      this.newDog.userId = user.id;
      this.apiService.createDog(this.newDog)
      .subscribe(res => {
        this.router.navigateByUrl('profile');
      });
    });         
  }  
}
