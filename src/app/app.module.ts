import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { FirebaseModule } from './firebase.module';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared-components/shared.module';

const defaultModule = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  AuthModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...defaultModule,
    AngularFireModule.initializeApp(environment.firebase),
    MaterialModule,
    FirebaseModule,
    SharedModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
