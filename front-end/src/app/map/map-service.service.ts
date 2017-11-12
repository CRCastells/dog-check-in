import { Injectable } from '@angular/core';

@Injectable()
export class MapService {

	  user: object = JSON.parse(window.localStorage[Object.keys(window.localStorage)[0]]);
		latitude: number;
		longitude: number;
		zoom: number;
	  markers: { lat: number, lng: number, name: string, address: string, rating: number}[] = [];

  constructor() { }

  getInfo(marker) {
  	console.log("Checking In!", marker, this.user);
  }
}
