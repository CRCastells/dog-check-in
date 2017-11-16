import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../services/api-service.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-dog-show',
  templateUrl: './dog-show.component.html',
  styleUrls: ['./dog-show.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DogShowComponent implements OnInit {
	
	oneDog = {
		name: 'fido',
		breed: 'shiba',
		fixed: true,
		description: 'the goodest of boys',
		age: 2,
		image: 'http://truecompanionstraining.com/wp-content/uploads/good-dog-school.jpg'
	};

  constructor(
  	private apiService : ApiService,
  	private route : ActivatedRoute,
  	private router : Router
 	) { }

  ngOnInit() {
    // Dog show page. Displays the dog on initiation of the page.
  	this.route.paramMap.subscribe(params => {
  		this.apiService.getOneDog(params.get('id')).subscribe(res => {
  			this.oneDog = res.json();
  		});
  	});
  }
    // Delete Dog from the dog show page.
  deleteDog(oneDog){
  	this.apiService.deleteDog(oneDog).subscribe(res => {
  		this.router.navigateByUrl('profile');
  	});
  }
}
