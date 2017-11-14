import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserRoutingModule } from './user/user-routing.module';
import { DogModule } from './dog/dog.module';
import { PartialsModule } from './partials/partials.module';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { UserIndexComponent } from './user/user-index/user-index.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { ConnectionsComponent } from './connections/connections.component';
import { UserShowComponent } from './user/user-show/user-show.component';

import { environment } from '../environments/environment';
import * as firebase from 'firebase/app';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { MapService } from './map/map-service.service';
import { ApiService } from './services/api-service.service';
// import { ShowErrorsComponent } from './show-errors/show-errors.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LoginComponent,
    ProfileComponent,
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
    DogModule,
    UserRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    PartialsModule
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
