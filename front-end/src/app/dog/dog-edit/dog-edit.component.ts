import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api-service.service';

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
		image: 'http://truecompanionstraining.com/wp-content/uploads/good-dog-school.jpg'
	};

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
  updateDog(updatedDog) {
    this.apiService.updateDog(updatedDog).subscribe(res => {
      this.router.navigateByUrl(`/dogs/${res.json().id}`)
    })
  }

}
