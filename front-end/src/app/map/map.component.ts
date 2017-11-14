import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, NgZone } from '@angular/core';
import {  } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MapService } from './map-service.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit {

  user: object = JSON.parse(window.localStorage[Object.keys(window.localStorage)[0]]);
	latitude: number;
	longitude: number;
	searchControl: FormControl;
	zoom: number;
  markers: { lat: number, lng: number, name: string, address: string, rating: number}[] = [];
  checkIns: any;


 @ViewChild("search")
 	public searchElementRef: ElementRef;

 	constructor(
 		private mapsAPILoader: MapsAPILoader,
 		private ngZone: NgZone,
    private http: Http,
    private authService: AuthService,
    private router: Router,
    private mapService: MapService
 	) {}

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    // sets initial location of map to Denver while waiting for setCurrentPosition() to run
    this.zoom = 10;
    this.latitude = 39.7392;
    this.longitude = -104.9903;

    this.searchControl = new FormControl;

    // sets map to users location
    this.setCurrentPosition();

    // watches the search function to return new map set to search location
    // does not currently work with setCurrentPosition()
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.zoom = 16;
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.getDogParks();
        });
      });
    });
  }

  // gets users current location from the navigator
  setCurrentPosition() {
  	if('geolocation' in navigator) {
  		navigator.geolocation.getCurrentPosition((position) => {
  			this.latitude = position.coords.latitude;
  			this.longitude = position.coords.longitude;
  			this.zoom = 14;
        this.getDogParks();
  		})
  	}
  }

  // makes a an HTTP request to local API and places markers based on response
  getDogParks() {
    let markers = [];
    let parks = [];
    this.http.get(`/api/grabParks/?latitude=${this.latitude}&longitude=${this.longitude}`).subscribe(res => {
      parks = res.json().results;
      parks.forEach(function(data) {
        let lat = data.geometry.location.lat;
        let lng = data.geometry.location.lng;
        let name = data.name;
        let address = data.formatted_address;
        let rating = data.rating;
        markers.push({
         "lat": lat,
         "lng": lng,
         "name": name,
         "address": address,
         "rating": rating
       });
        return markers;
      })
      return markers;
    })
    this.markers = markers;
  }

  getCheckIns(marker){
    this.mapService.getCheckIns(marker).subscribe(res => {
      console.log(res.json());
    });
  }

  checkIn(marker){
    this.mapService.checkIn(marker).subscribe(res => {
      console.log(res.json());
    });
  }

  getDirections(){
    console.log("Opening Google Maps");
  }

}
