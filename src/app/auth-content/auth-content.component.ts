import { Component, EventEmitter, Output } from '@angular/core';
import { AxiosService } from '../axios.service';
import {Vehicle} from './../vehicle';


@Component({
  selector: 'app-auth-content',
  templateUrl: './auth-content.component.html',
  styleUrl: './auth-content.component.css'
})
export class AuthContentComponent {


data: string[] = [];


  constructor(private axiosService: AxiosService) {}


     logout() {
        window.location.href = '';
      }

  ngOnInit(): void {

    this.axiosService.request(
        "GET",
        "/messages",
        {}).then(
        (response) => {
            this.data = response.data;
        }).catch(
        (error) => {
            if (error.response.status === 401) {
                this.axiosService.setAuthToken(null);
            } else {
                this.data = error.response.code;
            }

        }

    );
  }



}
