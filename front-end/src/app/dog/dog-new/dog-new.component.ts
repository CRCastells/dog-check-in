import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dog-new',
  templateUrl: './dog-new.component.html',
  styleUrls: ['./dog-new.component.css']
})
export class DogNewComponent implements OnInit {

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
    private router: Router
  ) { }

  ngOnInit() {
    console.log(JSON.parse(window.localStorage[Object.keys(window.localStorage)[0]]));
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
