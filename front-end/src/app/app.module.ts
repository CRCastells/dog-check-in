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

import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { FollowersComponent } from './followers/followers.component';

import { MapService } from './map/map-service.service';
import { ApiService } from './services/api-service.service';
import { UserComponent } from './user/user.component';
import { UserIndexComponent } from './user/user-index/user-index.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserShowComponent } from './user/user-show/user-show.component';
import { UserRoutingModule } from './user/user-routing.module';
import { ConnectionsComponent } from './connections/connections.component';







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
    LoginComponent,
    ProfileComponent,
    FooterComponent,
    FollowersComponent,
    UserComponent,
    UserIndexComponent,
    UserEditComponent,
    UserShowComponent,
    ConnectionsComponent,
    ProfileComponent
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
    UserRoutingModule,
 
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    MapService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
