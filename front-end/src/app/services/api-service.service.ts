import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiServiceService {

	baseUrl = 'http://localhost:3000/api/';

  constructor(private http: Http) { }

  ///USERS
  getOneUser(userId){
  	return this.http.get(`${this.baseUrl}/users/${userId}`);
  }

  createUser(newUser){
  	return this.http.post(`${this.baseUrl}/users/`,newUser);
  }

  updateUser(updatedUser){
  	return this.http.put(`${this.baseUrl}/users/${updatedUser.id}`, updatedUser);
  }

  deleteUser(deletedUser){
  	return this.http.delete(`${this.baseUrl}/users/${deletedUser.id}`);
  }

  ///Dogs
  getOneDog(dogId){
  	return this.http.get(`${this.baseUrl}/dogs/${dogId}`);
  }

  createDog(newDog){
  	return this.http.post(`${this.baseUrl}/dogs/`,newDog);
  }

  updateDog(updatedDog){
  	return this.http.put(`${this.baseUrl}/dogs/${updatedDog.id}`, updatedDog);
  }

  deleteDog(deletedDog){
  	return this.http.delete(`${this.baseUrl}/dogs/${deletedDog.id}`);
  }

  ///parks
  getOnePark(parkId){
  	return this.http.get(`${this.baseUrl}/parks/${parkId}`);
  }

  createPark(newPark){
  	return this.http.post(`${this.baseUrl}/parks/`, newPark);
  }

  updatePark(updatedPark){
  	return this.http.put(`${this.baseUrl}/parks/${updatedPark.id}`, updatedPark);
  }

  deletePark(deletedPark){
  	return this.http.delete(`${this.baseUrl}/parks/${deletedPark.id}`);
  }

  //connections


  //checkins
}