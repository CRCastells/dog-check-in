import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dog-edit',
  templateUrl: './dog-edit.component.html',
  styleUrls: ['./dog-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DogEditComponent implements OnInit {
	updatedDog = {
		name: 'fido',
		breed: 'shiba',
		fixed: true,
		description: 'the goodest of boys',
		age: 2,
		image: 'http://truecompanionstraining.com/wp-content/uploads/good-dog-school.jpg',
    id: ''
	};

  @ViewChild('newDogForm')
  dogUpdateForm: NgForm;

  constructor(
    private route : ActivatedRoute,
    private apiService : ApiService,
    private router : Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.apiService.getOneDog(params.get('id')).subscribe(res => {
        this.updatedDog = res.json();
      });
    });
  }
  // Edit dog.  Includes form validations.
  updateDog(dogUpdateForm : NgForm) {
    let sendDog = {id:this.updatedDog.id}
    for (let prop in dogUpdateForm.form.value){
      if (dogUpdateForm.form.value[prop]) {
        console.log(prop);
        sendDog[prop] = dogUpdateForm.form.value[prop];
      }
    }
    console.log(sendDog);
    this.apiService.updateDog(sendDog).subscribe(res => {
      this.router.navigateByUrl(`/dogs/${res.json().id}`)
    })
  }

}
