import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MapService {

	  user: object = JSON.parse(window.localStorage[Object.keys(window.localStorage)[0]]);
		latitude: number;
		longitude: number;
		zoom: number;
	  markers: { lat: number, lng: number, name: string, address: string, rating: number}[] = [];

  constructor(
  	private http: Http
  ) { }

  checkIn(marker) {
  	console.log("Current Location: ", marker, "Current User: ", this.user);
    let checkin = {marker, user: this.user}
    return this.http.post(`/api/checkins/`, checkin);
  }

  getCheckIns(marker) {
    console.log("Current Location: ", marker, "Current User: ", this.user);
    return this.http.get(`/api/checkins/${marker.name}`, marker.name);
  }
}
