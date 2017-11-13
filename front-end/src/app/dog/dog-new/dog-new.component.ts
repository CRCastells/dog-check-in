import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api-service.service';
import { Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-dog-new',
  templateUrl: './dog-new.component.html',
  styleUrls: ['./dog-new.component.css']
})
export class DogNewComponent implements OnInit {

  @ViewChild('fileInput') fileInput;

	newDog = {
    name: '',
    breed: '',
    fixed: true,
    description: '',
    age: 0,
    picture: ''
  };

  constructor(
  	private apiService : ApiService
  ) { }

  ngOnInit() {
  }

  saveDog(newDog){
    // const fileBrowser = this.fileInput.nativeElement;
    // if (fileBrowser.files && fileBrowser.files[0]) {
    //   newDog.picture = fileBrowser.files[0];
    //   let headers = new Headers();
    //   headers.append('Accept', 'application/json');
    //   let options = new RequestOptions({ headers: headers });
    	this.apiService.createDog(newDog)
    	.subscribe(res => {
    		console.log(res.json());
    	});
    //}          
  }  
}
