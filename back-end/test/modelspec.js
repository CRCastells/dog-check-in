let expect = require('chai').expect;
let request = require('request');
const db = require('../models');
const Park = db.models.Park;


describe('dogs', () => {

  it('allows creation of a new dog', (done) => {
    let fido = {
      id: 19,
      name: "Fido",
      age: 1,
      breed: "Boxer",
      fixed: true,
      description: "super fun pup",
      image: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/boxer-dogs-and-puppies/boxer-dogs-puppies-3.jpg'
    };
    request.post({ url: 'http://localhost:3000/api/dogs', form: fido }, (err, response, body) => {
      expect(JSON.parse(body)).to.include({
        name: "Fido",
        age: '1',
        breed: "Boxer",
        fixed: true,
        description: "super fun pup",
        image: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/boxer-dogs-and-puppies/boxer-dogs-puppies-3.jpg'
      });
      done();
    });
  });
  it('allows update of a dog', (done) => {

    request("http://localhost:3000/api/dogs/19", (err, response, body) => {
      let fido = JSON.parse(body);
      fido.age = Number(fido.age);
      request.patch({ url: "http://localhost:3000/api/dogs/19", form: { age: fido.age + 1 } }, (err, response, body) => {
        expect(Number(JSON.parse(body).age)).to.eq(fido.age + 1);
        done();
      });
    });
  }).timeout(6000);
  it('allows reading of dogs', (done) => {
    request.get("http://localhost:3000/api/dogs", (err, response, body) => {
      expect(response.statusCode).to.eq(200);
      done();
    });
  });
  it('allows deletion of a dog', (done) => {
    request.del("http://localhost:3000/api/dogs/19", (err, response, body) => {
      expect(body).to.eq('dog deleted');
      done();
    });
  });
});

describe('users', () => {
  it('allows creation of a new user', (done) => {
    let steve = {
      id: 1,
      firebase_id: 2,
      name: "Steve Stevenson",
      email: "Steve@steve.steve",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg/1200px-Steve_Jobs_Headshot_2010-CROP.jpg",
    };
    request.post({ url: 'http://localhost:3000/api/users', form: steve }, (err, response, body) => {
      console.log(body);
      expect(JSON.parse(body)).to.include({
        firebase_id: '2',
        name: "Steve Stevenson",
        email: "Steve@steve.steve",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg/1200px-Steve_Jobs_Headshot_2010-CROP.jpg",
      });
      done();
    });
  });
  it('allows update of a user', (done) => {
    request.patch({ url: "http://localhost:3000/api/users/1", form: { email: 'Steve@jobs.com' } }, (err, response, body) => {
      expect(JSON.parse(body).email).to.eq('Steve@jobs.com');
      done();
    });
  }).timeout(6000);
  it('allows reading of users', (done) => {
    request.get("http://localhost:3000/api/users", (err, response, body) => {
      expect(response.statusCode).to.eq(200);
      done();
    });
  });
  it('allows deletion of a user', (done) => {
    request.del("http://localhost:3000/api/users/1", (err, response, body) => {
      expect(body).to.eq('user deleted');
      done();
    });
  });
});

describe('parks', () => {
  it('allows creation of a new park', (done) => {
    let park = {
      id: 69,
      name: "Dog Park",
      address: "123 dog park lane",
      lat: 10,
      lng: -10,
      image: '',
      rating: 4.3
    };
    request.post({ url: "http://localhost:3000/api/parks", form: park }, (err, response, body) => {
      expect(JSON.parse(body)).to.include({
        id: 69,
        name: "Dog Park",
        address: "123 dog park lane",
        lat: '10',
        lng: '-10',
        rating: '4.3'
      });
      done();
    });
  });
  it('allows reading of parks', (done) => {
    request.get("http://localhost:3000/api/parks", (err, response, body) => {
      expect(response.statusCode).to.eq(200);
      Park.findById(69)
        .then(function(park) {
          if (!park) console.log("park not found");
          else park.destroy();
        })
        .then(function() {
          console.log("park deleted");
        });
      done();
    });
  });

});