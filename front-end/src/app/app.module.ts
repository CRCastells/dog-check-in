import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { DogNewComponent } from './dog/dog-new/dog-new.component';
import { DogEditComponent } from './dog/dog-edit/dog-edit.component';
import { DogIndexComponent } from './dog/dog-index/dog-index.component';
import { DogShowComponent } from './dog/dog-show/dog-show.component';
import { DogComponent } from './dog/dog.component';
import { DogRoutingModule } from './dog/dog-routing.module';
import { AgmCoreModule } from '@agm/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './auth-guard.service';





@NgModule({
  declarations: [
    AppComponent,
    DogNewComponent,
    DogEditComponent,
    DogIndexComponent,
    DogShowComponent,
    DogComponent,
    MapComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
    	apiKey: 'AIzaSyAcPOBYzMe3J_AkZrkC00BnTVdlc1ePv3E',
      libraries: ['places']
    }),
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DogRoutingModule,
 
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
