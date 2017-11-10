import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, NgZone } from '@angular/core';
import {  } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit {

	latitude: number;
	longitude: number;
	searchControl: FormControl;
	zoom: number;
  markers: { lat: number, lng: number }[] = [];


 @ViewChild("search")
 	public searchElementRef: ElementRef;

 	constructor(
 		private mapsAPILoader: MapsAPILoader,
 		private ngZone: NgZone,
    private http :Http
 	) {}

  ngOnInit() {

  	//
  	this.zoom = 10;
  	this.latitude = 39.7392;
  	this.longitude = -104.9903;

  	this.searchControl = new FormControl;

  	this.setCurrentPosition();

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
  			});
  		});
  	});
  }

  setCurrentPosition() {
  	if('geolocation' in navigator) {
  		navigator.geolocation.getCurrentPosition((position) => {
  			this.latitude = position.coords.latitude;
  			this.longitude = position.coords.longitude;
  			this.zoom = 14;
        this.getDogParks();
        this.getMarkers();
  		})
  	}
  }

  getDogParks() {
    let markers = [];
    let parks = [];
    this.http.get('http://localhost:3000/api/grabParks').subscribe(res => {
      parks = res.json().results;
      parks.forEach(function(data) {
        let lat = data.geometry.location.lat;
        let lng = data.geometry.location.lng;
        markers.push({ "lat": lat, "lng": lng });
        return markers;
      })
      return markers;
    })
    this.markers = markers;
  }

  getMarkers() {
    console.log(this.markers)
  }

}
