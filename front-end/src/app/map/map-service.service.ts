import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MapService {

	  user: object;
		latitude: number;
		longitude: number;
		zoom: number;
	  markers: { lat: number, lng: number, name: string, address: string, rating: number}[] = [];

  constructor(
  	private http: Http
  ) { }

  checkIn(marker) {
    let user = JSON.parse(window.localStorage[Object.keys(window.localStorage)[0]]);
   //  console.log(window.localStorage);
  	// console.log("Current Location: ", marker, "Current User: ", user);
    let checkin = {marker, user}
    return this.http.post(`/api/checkins/`, checkin);
  }

  getCheckIns(marker) {
    let user = JSON.parse(window.localStorage[Object.keys(window.localStorage)[0]]);
    // console.log(window.localStorage);
    // console.log("Current Location: ", marker, "Current User: ", user);
    let checkin = {marker, user}    
    return this.http.post(`/api/checkins/retrieve/`, checkin);
  }
}
