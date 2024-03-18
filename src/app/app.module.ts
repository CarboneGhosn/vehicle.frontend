import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehicleInputComponent } from './vehicle-input/vehicle-input.component';
import { VehicleDisplayComponent } from './vehicle-display/vehicle-display.component';
import { VehicleEditComponent } from './vehicle-edit/vehicle-edit.component';
import { VehicleWrapperComponent } from './vehicle-wrapper/vehicle-wrapper.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeContentComponent } from './welcome-content/welcome-content.component';
import { AxiosService } from './axios.service';
import { AuthContentComponent } from './auth-content/auth-content.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ContentComponent } from './content/content.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { VehiclePageComponent } from './vehicle-page/vehicle-page.component';




@NgModule({

   imports: [
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      VehicleInputComponent,
      VehicleDisplayComponent,
      VehicleEditComponent,
      VehicleWrapperComponent,
      AppRoutingModule,
      FormsModule


  ],
  declarations: [
    AppComponent,
    WelcomeContentComponent,
    AuthContentComponent,
    LoginFormComponent,
    ContentComponent,
    ButtonsComponent,
    VehiclePageComponent,

  ],
  providers: [AxiosService],
  bootstrap: [AppComponent],
})
export class AppModule { }
