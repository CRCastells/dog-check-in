// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyDvLIn64bFMQZKPFJ7W9h-9HrirEDzY2EU",
    authDomain: "dog-checkin.firebaseapp.com",
    databaseURL: "https://dog-checkin.firebaseio.com",
    projectId: "dog-checkin",
    storageBucket: "dog-checkin.appspot.com",
    messagingSenderId: "19554436958"
   }
};
